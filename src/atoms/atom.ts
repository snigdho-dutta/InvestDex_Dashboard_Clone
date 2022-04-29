import { atom } from 'recoil'
import { cryptoCurrencies } from '../utils/drawerNav'

export const cryptoState = atom({
  key: 'cryptoCurrency',
  default: cryptoCurrencies[0],
})

export const showMenuState = atom({
  key: 'showMenu',
  default: false,
})

export const modalState = atom({
  key: 'showModal',
  default: false,
})

export const darkState = atom({
  key: 'darkMode',
  default: false,
})

export const extendMenuState = atom({
  key: 'extendMemu',
  default: false,
})
