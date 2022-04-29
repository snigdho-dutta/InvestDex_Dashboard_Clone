import React, { useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cryptoState } from '../atoms/atom'
import { cryptoCurrencies } from '../utils/drawerNav'

const SidebarSelect = () => {
  const [currentCrypto, setCurrentCrypto] = useRecoilState(cryptoState)

  const scrollRef = useRef<HTMLDivElement>(null)
  const [showButton, setShowButton] = useState(false)

  const handleScroll = (dir: 'LEFT' | 'RIGHT') => {
    console.log(scrollRef.current)
    if (scrollRef.current) {
      let left: number
      if (dir === 'LEFT') {
        left = scrollRef.current.scrollLeft - 290
      } else {
        left = scrollRef.current.scrollLeft + 290
      }
      scrollRef.current.scrollTo({
        behavior: 'smooth',
        left: left,
      })
    }
  }

  return (
    <>
      {showButton && (
        <button
          className="p-1 absolute left-0 hover:scale-105 hover:shadow-md  rotate-180 rounded-full shadow bg-slate-200 dark:bg-dark2 z-[100]"
          onClick={handleScroll.bind(null, 'LEFT')}
          onMouseEnter={(e) => setShowButton(true)}
        >
          <IoIosArrowForward />
        </button>
      )}
      {showButton && (
        <button
          className="p-1 bg-slate-200 rounded-full right-0 z-[100] absolute hover:scale-105 hover:shadow-md shadow dark:bg-dark2"
          onClick={handleScroll.bind(null, 'RIGHT')}
          onMouseEnter={(e) => setShowButton(true)}
        >
          <IoIosArrowForward />
        </button>
      )}
      <nav
        className="flex gap-x-2 px-4 items-center flex-row bg-gray-200 py-1 overflow-x-scroll scrollbar-hide h-8 relative dark:bg-white/20"
        ref={scrollRef}
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        {cryptoCurrencies.map((item, idx) => (
          <div
            key={idx}
            className={`flex min-w-[90px] px-1 space-x-1 cursor-pointer transition hover:scale-105
          ${
            item.name === currentCrypto.name &&
            `border-b-4 rounded-lg ${item.border} font-bold`
          }
          `}
            onClick={() => setCurrentCrypto(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[20px] h-[20px]"
            />
            <p className={`text-sm whitespace-nowrap ${item.color}`}>
              {item.name}
            </p>
          </div>
        ))}
      </nav>
    </>
  )
}

export default SidebarSelect
