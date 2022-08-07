import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Center, HStack, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { Switch } from '../components/switch'
import { GamePadMoadl } from '../components/gamePadModal'
import { useSetRecoilState } from 'recoil'
import {
  gamePadModalState
} from '../components/state'

const Home = () => {
  const setShowGamepadModal = useSetRecoilState(gamePadModalState)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Switch WebRTC</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" href="/icon-192x192.png" />
      </Head>

      <Center w="100vw" h="100vh" bgColor="black">
        <Switch>
          <VStack w="100%" h="100%" justify="center">
            <Center h="40%" w="80%">
              <Link href="stream">
                <Button
                  colorScheme='red'
                  variant='solid'
                  width='100%'
                  height='100%'
                >
                  PLAY
                </Button>
              </Link>
            </Center>
            
            <HStack w='100%' h="30%" justify="center">
              <Button
                colorScheme='orange'
                variant='solid'
                width='40%'
                height='100%'
              >
                SETTINGS
              </Button>
              <Button
                colorScheme='orange'
                variant='solid'
                width='40%'
                height='100%'
                onClick={() => setShowGamepadModal(true)}
              >
                GAMEPAD
              </Button>
            </HStack>
          </VStack>
        </Switch>
        
      </Center>

      <GamePadMoadl />

    </motion.div>
  )
}

export default Home
