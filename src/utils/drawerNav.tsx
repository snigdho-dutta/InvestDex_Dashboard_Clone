import {
  GiSpermWhale,
  GiNanoBot,
  GiCubeforce,
  GiAbstract053,
} from 'react-icons/gi'
import { MdOutlineEventNote, MdOutlineDashboardCustomize } from 'react-icons/md'
import { BsUmbrella, BsShop } from 'react-icons/bs'
import { BiBot } from 'react-icons/bi'
import { CgListTree } from 'react-icons/cg'
import {
  pairExplorer,
  markets,
  newListings,
  whaleWatcher,
  ethereum,
  bnbChain,
  polygon,
  avalanche,
  fantom,
  cronos,
  sysCoin,
} from '../assets'

// export const navIcons = [
//   MdOutlineDashboardCustomize,
//   GiCubeforce,
//   GiAbstract053,
//   BsShop,
//   MdOutlineEventNote,
//   BsUmbrella,
//   GiSpermWhale,
//   BiBot,
//   GiNanoBot,
// ]

// export const navItems = [
//   'Dashboard',
//   'Pair Explorer',
//   'Markets',
//   'Work Station',
//   'Risk Management',
//   'Umbrella',
//   'Whale Watcher',
//   'Price Bot',
//   'New Pair Bots',
// ]

export const navListObj = {
  dashboard: <MdOutlineDashboardCustomize size={24} />,
  newListings: <GiCubeforce size={24} />,
  pairExplorer: <GiAbstract053 size={24} />,
  Workstation: <BsShop size={24} />,
  markets: <MdOutlineEventNote size={24} />,
  riskManagement: <BsUmbrella size={24} />,
  whaleWatcher: <GiSpermWhale size={24} />,
  priceBot: <BiBot size={24} />,
  newPairBots: <GiNanoBot size={24} />,
}

export const cardTwoItems = [
  {
    name: 'pairExplorer',
    img: pairExplorer,
    dec: 'search and reasearch on tokens',
  },
  {
    name: 'markets',
    img: markets,
    dec: 'DEX Markets',
  },
  {
    name: 'newListings',
    img: newListings,
    dec: 'New List Pairs on ETH',
  },
  {
    name: 'whaleWatcher',
    img: whaleWatcher,
    dec: 'Watch Whales',
  },
]

export const cryptoCurrencies = [
  {
    name: 'Ethereum',
    image: ethereum,
    unit: 'ETH',
    color: 'text-blue-500',
    background: 'bg-blue-500',
    from: 'from-blue-500/50',
    border: 'border-blue-500',
    hueRotate: 'hue-rotate-0',
  },
  {
    name: 'BNB Chain',
    image: bnbChain,
    unit: 'BSC',
    color: 'text-orange-500',
    background: 'bg-orange-500',
    from: 'from-orange-500/50',
    border: 'border-orange-500',
    hueRotate: 'hue-rotate-45',
  },
  {
    name: 'Polygon',
    image: polygon,
    unit: 'MATIC',
    color: 'text-purple-500',
    background: 'bg-purple-500',
    from: 'from-purple-500/50',
    border: 'border-purple-500',
    hueRotate: 'hue-rotate-90',
  },
  {
    name: 'Avalanche',
    image: avalanche,
    unit: 'AVAX',
    color: 'text-rose-500',
    background: 'bg-rose-500',
    from: 'from-rose-500/50',
    border: 'border-rose-500',
    hueRotate: 'hue-rotate-135',
  },
  {
    name: 'Fantom',
    image: fantom,
    unit: 'FTM',
    color: 'text-sky-500',
    background: 'bg-sky-500',
    from: 'from-sky-500/50',
    border: 'border-sky-500',
    hueRotate: 'hue-rotate-180',
  },
  {
    name: 'Cronos',
    image: cronos,
    unit: 'CRO',
    color: 'text-teal-500',
    background: 'bg-teal-500',
    from: 'from-teal-500/50',
    border: 'border-teal-500',
    hueRotate: 'hue-rotate-225',
  },
  {
    name: 'Syscoin',
    image: sysCoin,
    unit: 'ETH',
    color: 'text-amber-500',
    background: 'bg-amber-500',
    from: 'from-amber-500/50',
    border: 'border-amber-500',
    hueRotate: 'hue-rotate-270',
  },
]
