import React, { useState } from 'react'
import Header from '../components/Header'
import PrimaryCards from '../components/PrimaryCards'
import { IoIosMenu } from 'react-icons/io'
import { logo } from '../assets'
import Spotlight from '../components/Spotlight'
import { modalState, showMenuState } from '../atoms/atom'
import { useRecoilState } from 'recoil'

const Home: React.FC = () => {
  const [showMenu, setShowMenu] = useRecoilState(showMenuState)

  const [showModal, setShowModal] = useRecoilState(modalState)
  return (
    <div
      className="flex-1 bg-gradient-to-b dark:from-dark1 dark:to-dark1 from-blue-50 via-white to-blue-50 px-2 py-4 pt-16 h-screen overflow-y-scroll scrollbar-hide relative"
      onClick={(e) => {
        e.stopPropagation()
        setShowMenu(false)
        setShowModal(false)
      }}
    >
      <div className="flex items-center space-x-4 absolute top-4 left-2 xl:hidden p-2">
        <button
          className="bg-white dark:bg-white/20 focus:ring-2 focus:ring-teal-200 dark:text-white p-1 shadow-md rounded-md hover:drop-shadow-md"
          onClick={(e) => {
            e.stopPropagation()
            setShowMenu((p) => !p)
          }}
        >
          <IoIosMenu size={25} />
        </button>
        <div className="flex items-center space-x-2">
          <img src={logo} width={40} height={40} />
          <p className={`font-sans font-semibold text-2xl`}>InvestDex</p>
        </div>
      </div>
      <Header />
      <div className="flex w-full flex-col space-y-10">
        <PrimaryCards />
        <Spotlight />
      </div>
    </div>
  )
}

export default Home
