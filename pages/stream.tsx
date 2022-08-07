import Head from 'next/head'
import { connection } from '@open-ayame/ayame-web-sdk'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Center } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import {
  gamePadIndexState
} from '../components/state'

const useAnimationFrame = (isRunning: boolean, callback = () => {}) => {
  const reqIdRef = useRef<number>(null!);
  const loop = () => {
    if (isRunning) {
      reqIdRef.current = requestAnimationFrame(loop);
      callback();
    }
  }

  useEffect(() => {
    reqIdRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [loop]);
};

const Stream = () => {
  const gamePadIndex = useRecoilValue(gamePadIndexState);

  const video = useRef<HTMLVideoElement>(null)

  const dataChannel = useRef<RTCDataChannel | null>(null)
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    const conn = connection('wss://switch.tomori.work/signaling', 'test')
    conn.options.video.direction = 'recvonly';
    conn.options.audio.direction = 'recvonly';
    conn.on('open', async (e: any) => {
      dataChannel.current = await conn.createDataChannel('dataChannel');
      if (dataChannel.current !== null) {
        dataChannel.current.onmessage = (e) => {
          console.log('data received: ', e.data)
        }
        dataChannel.current.onopen = () => {
          if (gamePadIndex !== undefined) setIsRunning(true)
        }
      }
    });
    const startConn = async () => {
        await conn.connect(null);
        conn.on('disconnect', (e: any) => console.log(e));
        conn.on('addstream', (e: any) => {
          if (video.current) {
            video.current.srcObject = e.stream;
          }
        });
    };
    startConn();
    return  () => {
      setIsRunning(false)
      conn.disconnect()
    }
  }, [])

  const sendData = (data: ArrayBuffer) => {
    if (dataChannel.current !== null) {
      dataChannel.current.send(data)
    }
  }

  useAnimationFrame(isRunning, () => {
    if (gamePadIndex === undefined) {
      return;
    }
    const gamepads = navigator.getGamepads();
    const gp = gamepads[gamePadIndex];
    if (!gp) {
      throw new Error('there is no gamepad');
    }

    let key = 0x800000;
    for (let i = 0; i < gp.buttons.length; i++) {
      const b = gp.buttons[i];
      key = key | (Number(b.pressed) << (23 - i - 1));
    }
    key = key & 0xffffff

    const lx = gp.axes[0];
    const ly = gp.axes[1];
    const ls = (((Math.round(Math.abs(lx) * 7) & 0b0111)
        | (Number(Math.sign(lx) === 1) << 3)) << 4)
      | ((Math.round(Math.abs(ly) * 7) & 0b0111)
        | (Number(Math.sign(ly) === 1) << 3));
        
    const rx = gp.axes[2];
    const ry = gp.axes[3];
    const rs = (((Math.round(Math.abs(rx) * 7) & 0b0111)
      | (Number(Math.sign(rx) === 1) << 3)) << 4)
      | ((Math.round(Math.abs(ry) * 7) & 0b0111)
        | (Number(Math.sign(ry) === 1) << 3))

    sendData(
      new Uint8Array([key >> 16, key >> 8, key & 0xff, ls, rs])
    )
  })
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Switch WebRTC | Stream</title>        
      </Head>

      <Center w="100vw" h="100vh" bgColor="black">
        <video
          ref={video}
          id="remote-video"
          autoPlay
          playsInline
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: '100%',
            aspectRatio: '16 / 9',
          }}
        >
        </video>
      </Center>
    </motion.div>
  )
}

export default Stream
