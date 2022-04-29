import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchModal from './SearchModal'

const Header = () => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="bg-transparent flex flex-col xl:flex-row items-center xl:justify-around w-full">
      <div className="self-start p-1">
        <p className="font-bold tracking-wide dark:text-slate-300 text-3xl border-b-2 pb-2">
          InvestSuite
        </p>
      </div>
      <div className="w-full p-2 bg-white dark:bg-dark2 shadow-md rounded-2xl relative xl:w-[60%]">
        <div className="w-full bg-gradient-to-r from-amber-400 to-gray-400 p-[1px] rounded-2xl flex items-center">
          <div className="absolute left-4 text-amber-500">
            <BiSearch size={36} />
          </div>
          <input
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full dark:bg-dark2 placeholder:text-amber-500 outline-none p-2 rounded-2xl pl-12 text-lg text-amber-500"
            placeholder="Search pair by symbol/name/pair contract"
          />
        </div>
        {isFocused && <SearchModal />}
      </div>
    </div>
  )
}

export default Header
