import { atom } from 'recoil'

export const gamePadModalState = atom<boolean>({
  key: 'gamePadModal',
  default: false
})

export const gamePadIndexState = atom<number | undefined>({
  key: 'gamePadIndex',
  default: undefined,
})