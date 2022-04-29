import React from 'react'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { IoLogOutOutline } from 'react-icons/io5'
import { MdLanguage } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { darkState } from '../atoms/atom'
import { IoIosArrowForward } from 'react-icons/io'

const DrawerModal = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkState)

  return (
    <div className="fixed p-3 flex items-center flex-col bottom-[2rem] left-[1rem] sm:left-[10rem] z-10 bg-white rounded-2xl shadow-lg drop-shadow min-h-[200px] min-w-[300px] justify-around">
      <div className="text-emerald-500 flex space-x-2 items-center border-b pb-2 border-emerald-500 text-semibold w-fit h-4 whitespace-nowrap">
        <IoLogOutOutline />
        <p>Login to InvestDex</p>
      </div>
      <div className="flex flex-col text-gray-500 w-full">
        <div className="flex justify-between">
          <div>Help & Support</div>
          <div>Notifications</div>
        </div>
        <div className="flex justify-between">
          <div>Personal Info</div>
          <button
            className="flex items-center space-1"
            onClick={() => setDarkMode((p) => !p)}
          >
            <p>{!darkMode ? 'Light Mode' : 'Dark Mode'}</p>{' '}
            {!darkMode ? <BsToggleOff size={26} /> : <BsToggleOn size={26} />}
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <MdLanguage size={20} />
          English
          <IoIosArrowForward className="rotate-90 bg-gray-500/50 text-white rounded-full " />
        </div>
      </div>
      <button className="p-1 rounded-md bg-customBlue text-white self-start">
        Upgrade
      </button>
    </div>
  )
}

export default DrawerModal
