import { useEffect, useRef, useState } from 'react';
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  VStack,
  HStack,
  Center,
  Button,
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import {
  gamePadIndexState,
  gamePadModalState
} from '../components/state'

export const GamePadMoadl = () => {
  const [gamePadIndex, setGamepadIndex] = useRecoilState(gamePadIndexState)
  const [showGanpadModal, setShowGanpadModal] = useRecoilState(gamePadModalState)

  const [gamePads, setGamePads] = useState<(Gamepad | null)[]>([])
  useEffect(() => {
    const gamepadconnectedHandle = () => setGamePads([...window.navigator.getGamepads()])
    gamepadconnectedHandle()
    window.addEventListener('gamepadconnected', gamepadconnectedHandle)
    return () => {
      window.removeEventListener('gamepadconnected', gamepadconnectedHandle)
    }
  }, [])

  return (
    <Modal
      isOpen={showGanpadModal}
      onClose={() => setShowGanpadModal(false)}
      isCentered={true}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent w="100%" p="30px">
        <VStack>
        {gamePads.map((d, i) => {
            if (!d) return null;
            return (
              <HStack
                key={i}
                w="100%"
              >
                <Center w="80%">
                  {d?.id}
                </Center>
                {d.index === gamePadIndex ? (
                  <Button
                    w="20%"
                    onClick={() => {
                      setGamepadIndex(undefined);
                    }}
                  >
                    切断
                  </Button>
                ) : (
                  <Button
                    w="20%"
                    onClick={() => setGamepadIndex(i)}
                  >
                    接続
                  </Button>
                )}
                
              </HStack>
            )}
          )}
          {gamePads
            .filter(d => d !== null).length === 0 && (
              <Text>
                コントローラーが接続されていません。
              </Text>
          )}
        </VStack>
      </ModalContent>
    </Modal>
  )
}