import React from 'react'
import { MdCircle } from 'react-icons/md'
import { FaTachometerAlt } from 'react-icons/fa'
import { IoRocket } from 'react-icons/io5'
import SidebarCard from './SidebarCard'
import { useRecoilState } from 'recoil'
import { cryptoState } from '../atoms/atom'
import SidebarSelect from './SidebarSelect'

const Sidebar = () => {
  const [crypto, setCrypto] = useRecoilState(cryptoState)
  return (
    <div className="w-[25%] dark:bg-dark2 dark:text-white hidden xl:flex bg-bl flex-col items-center scrollbar-none scrollbar-hide overflow-auto">
      <div className="w-full py-1 px-4 space-y-4 flex text-gray-500 dark:text-white items-center flex-col">
        <div className="flex w-full items-center justify-around">
          <div className="flex text-xs font-semibold items-center p-1 border rounded-2xl border-gray-500 space-x-1">
            <p>What's new</p>
            <MdCircle color="green" size={10} />
          </div>
          <div className="flex space-x-1 text-sm items-center">
            <FaTachometerAlt size={18} />
            <p>38.5</p>
            <p>GWEI</p>
          </div>
          <div className="flex space-x-1 text-sm items-center">
            <p>MATIC :</p>
            <p>$1.26</p>
          </div>
        </div>
        <SidebarCard />
        <div className="flex w-full justify-between">
          <div
            className={`flex items-center font-bold space-x-2 text-sm ${crypto.color}`}
          >
            <IoRocket size={18} />
            <p>Trending</p>
          </div>
          <button
            className={`p-1 bg-opacity-20 hover:shadow-md hover:scale-105 ${crypto.color} text-xs rounded-md ${crypto.background}`}
          >
            Show All
          </button>
        </div>
      </div>
      <div className="w-full flex items-center relative">
        <SidebarSelect />
      </div>
    </div>
  )
}

export default Sidebar
