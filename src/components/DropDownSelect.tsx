import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { useRecoilState } from 'recoil'
import { ethereum } from '../assets'
import { cryptoState } from '../atoms/atom'
import { cryptoCurrencies } from '../utils/drawerNav'

const DropDownSelect = () => {
  const [seeMore, setSeeMore] = useState(false)
  const [selectedCrypto, setSelectedCrypto] = useRecoilState(cryptoState)
  const { image, name, color } = selectedCrypto
  return (
    <>
      <div className="flex mt-10 p-2 px-3 rounded-md hover:shadow-lg shadow-inner w-full justify-between space-x-4 border items-center">
        <div className="flex space-x-2 items-center">
          <img src={image} alt="ethereum logo" className="w-[24px] h-[24px]" />
          <p className={`text-lg font-semibold ${color}`}>{name}</p>
        </div>
        <button
          className="flex items-center space-x-2 text-sm font-base text-gray-500 dark:text-white"
          onClick={(e) => setSeeMore((p) => !p)}
        >
          <span>{!seeMore ? 'See More' : 'See Less'}</span>
          <div className={`${seeMore && 'rotate-180'} transition duration-300`}>
            <IoIosArrowUp />
          </div>
        </button>
      </div>

      <div
        className={`absolute bg-white dark:bg-dark2 rounded-lg top-[6rem] w-[95%] shadow-lg  transition-all duration-300 ${
          seeMore
            ? 'opacity-100 y-0 z-10'
            : 'opacity-0 w-0 -translate-y-[50px] -z-10'
        }`}
      >
        <ul className="flex flex-col rounded-md space-y-1 py-1">
          {cryptoCurrencies.map((item, idx) => (
            <li
              className="flex justify-between items-center w-full hover:bg-gray-200 cursor-pointer px-2 py-1 rounded"
              key={item.name}
              onClick={() => {
                setSelectedCrypto(cryptoCurrencies[idx])
                setSeeMore(false)
              }}
            >
              <div className="flex items-center flex-1 space-x-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[32px] w-[32px]"
                />
                <p className={`font-semibold ${item.color}`}>{item.name}</p>
              </div>
              <div className="p-1">
                <p className="dark:text-white text-gray-500 text-sm">
                  {item.unit}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DropDownSelect
