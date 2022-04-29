import React from 'react'
import { sidebarStar } from '../assets'
import { RiShieldStarFill } from 'react-icons/ri'
import { useRecoilValue } from 'recoil'
import { cryptoState } from '../atoms/atom'
import Moment from 'react-moment'

const SidebarCard = () => {
  const currentCrypto = useRecoilValue(cryptoState)
  const { color, from, background } = currentCrypto
  return (
    <div
      className={`rounded-3xl bg-gradient-to-b relative shadow-lg w-[90%] space-y-5 flex items-center flex-col h-[40vh] ${from} via-white/0`}
    >
      <div className={`${color} absolute drop-shadow-md -top-5`}>
        <RiShieldStarFill size={50} />
        <div
          className={`w-6 h-6 absolute ${background} hue-rotate-60 rounded-full top-3 left-3 -z-10`}
        />
      </div>
      <div className="flex justify-around text-center text-lg h-full itemx-center flex-col">
        <h1 className="text-2xl font-bold">#1</h1>
        <p className="text-gray-500 dark:text-slate-200">
          Best pair is <span className="font-bold text-black">Hedron</span>{' '}
        </p>
        <h1 className={`${color} text-3xl font-bold`}>$0.000674523</h1>
        <h3 className="text-green-500 font-semibold text-xl">391.41%</h3>
        <Moment
          local
          withTitle
          className="text-gray-500 dark:text-slate-200 text-sm w-[80%] self-center"
        >
          {new Date()}
        </Moment>
      </div>
    </div>
  )
}

export default SidebarCard
