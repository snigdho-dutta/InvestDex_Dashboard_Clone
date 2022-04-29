import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'
import { logo } from '../assets'
import { navListObj } from '../utils/drawerNav'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  darkState,
  extendMenuState,
  modalState,
  showMenuState,
} from '../atoms/atom'
import ReactTooltip from 'react-tooltip'
import captilaize from '../utils/captilaize'
import DrawerModal from './DrawerModal'

const Drawer: React.FC = () => {
  const [showMenu, setShowMenu] = useRecoilState(showMenuState)
  const [extendMenu, setExtendMenu] = useRecoilState(extendMenuState)
  const [activeItem, setActiveItem] = useState(0)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const darkMode = useRecoilValue(darkState)
  return (
    <>
      <ReactTooltip backgroundColor={darkMode ? '#606060' : ''} />
      <div
        className={`fixed xl:relative xl:left-0 h-screen xl:flex items-center flex-col transition-all duration-300 w-[15rem] bg-white dark:bg-dark2 dark:text-white z-10 shadow-md ${
          extendMenu ? 'xl:w-[15rem]' : 'xl:w-20'
        }
        ${showMenu ? 'left-0' : '-left-[15rem]'}
        `}
      >
        <button
          className="absolute hidden xl:block bg-white dark:bg-dark2 dark:shadow-white/50 rounded-md shadow-md -right-[12px] top-[4rem] hover:scale-105 hover:drop-shadow-lg"
          onClick={() => setExtendMenu((p) => !p)}
        >
          {extendMenu ? (
            <IoIosArrowBack size={25} />
          ) : (
            <IoIosArrowForward size={25} />
          )}
        </button>
        <div className="flex relative flex-col w-full p-4 justify-between h-full">
          <div className="flex items-center space-x-2 h-[10%]">
            <img src={logo} width={40} height={40} />
            <p
              className={`font-semibold text-2xl ${
                extendMenu ? 'xl:block' : 'xl:hidden'
              }`}
            >
              InvestDex
            </p>
          </div>
          <ul className="flex flex-col h-[75%] w-full items-center transition-all space-y-4 text-gray-500 dark:text-white overflow-y-auto scrollbar-hide">
            {Object.entries(navListObj).map(([k, v], idx) => (
              <li
                className={`flex space-x-2 cursor-pointer h-[50px] items-center w-full hover:scale-105 hover:text-gray-700 dark:hover:text-rose-300 transition-all overflow-x-scroll scrollbar-hide ${
                  activeItem === idx && 'text-emerald-500'
                }`}
                key={idx}
                onClick={() => setActiveItem(idx)}
              >
                <div className="" data-tip={captilaize(k)}>
                  {v}
                </div>
                <div className=" w-[75%] overflow-x-auto scrollbar-hide">
                  <p
                    className={`text-lg font-semibold capitalize whitespace-nowrap transition-all ${
                      extendMenu ? 'xl:block' : 'xl:hidden'
                    }`}
                  >
                    {captilaize(k)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="w-full flex h-[10%] text-gray-500 dark:text-white items-center justify-center space-x-4 border-t-2 group pt-4 cursor-pointer"
            onClick={() => setShowModal((p) => !p)}
          >
            <div className="rounded-full group-hover:drop-shadow bg-gray-200 group-hover:shadow">
              <BiUserCircle size={40} />
            </div>
            <p
              className={`text-xl font-semibold ${
                extendMenu ? 'xl:block' : 'xl:hidden'
              }`}
            >
              Login
            </p>
          </div>
          {showModal && <DrawerModal />}
        </div>
      </div>
    </>
  )
}

export default Drawer
