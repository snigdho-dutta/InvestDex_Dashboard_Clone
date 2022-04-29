import React, { useState } from 'react'
import { ethereum, workstation } from '../assets'
import { HiClipboardCopy } from 'react-icons/hi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { MdOutlineEventNote } from 'react-icons/md'
import { IoIosArrowUp } from 'react-icons/io'
import { IoNewspaperSharp } from 'react-icons/io5'
import Card from './Card'
import { cardTwoItems } from '../utils/drawerNav'
import captilaize from '../utils/captilaize'
import { newsFeeds } from '../data/dummyData'
import NewsFeedCard from './NewsFeedCard'
import DropDownSelect from './DropDownSelect'
import { useRecoilValue } from 'recoil'
import { cryptoState } from '../atoms/atom'

const PrimaryCards = () => {
  const currentCrypto = useRecoilValue(cryptoState)
  return (
    <div className="w-full space-x-4 xl:space-y-4 space-y-10 justify-center flex flex-wrap pt-10 pb-5 items-center">
      <Card>
        <div className="h-full flex-col flex w-full relative  pb-4">
          <div
            className={`bg-gradient-to-b relative ${currentCrypto.from} ${currentCrypto.hueRotate} to-purple-50/0 rounded-3xl flex flex-col items-center p-4 h-[22rem]`}
          >
            <img
              src={workstation}
              alt="work station"
              className="h-[300px] sm:h-full"
            />
            <div className="flex space-x-2 absolute bottom-[12%] items-center  font-bold text-indigo-600 w-full text-lg justify-center p-1">
              <HiClipboardCopy size={24} />
              <p className="">Work Station</p>
            </div>
            <h3 className="font-bold absolute whitespace-nowrap bottom-[0%] text-gray-500 text-shadow dark:text-white text-xl">
              Check Your Workstation
            </h3>
          </div>
          <div className="flex flex-col items-center h-[30%] justify-around pb-4 w-full">
            <button className="text-indigo-500 font-bold flex items-center space-x-2 bg-[#afaff1] dark:bg-white/10 dark:hover:bg-white/50 transition bg-opacity-50 w-full justify-center rounded-md text-lg shadow p-1">
              Complete Tasks
              <AiOutlineArrowRight size={24} />
            </button>
            <button className="space-x-2 dark:border-indigo-500 rounded-md border-2 border-customPurple p-1 flex w-full items-center absolute -bottom-5 justify-center font-semibold text-gray-500 bg-white/10 dark:text-white">
              <MdOutlineEventNote size={24} /> Events
              <p className="text-indigo-500">6 upcomming events</p>
            </button>
          </div>
        </div>
      </Card>
      <Card>
        <div className="w-full min-h-[400px] md:min-h-fit flex flex-col items-center justify-around">
          <DropDownSelect />
          <ul className="flex flex-col dark:text-white w-full">
            {cardTwoItems.map((item, idx) => (
              <li
                className="flex justify-between p-2 items-center w-full rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 overflow-auto scrollbar-hide"
                key={idx + item.name}
              >
                <div className="flex items-center space-x-2">
                  <img src={item.img} alt={item.name} className="w-12 h-12" />
                  <div className="w-[70%]">
                    <p
                      className={`capitalize ${currentCrypto.color} invert hue-rotate-90 text-semibold`}
                    >
                      {captilaize(item.name)}
                    </p>
                    <p className="capitalize text-gray-500 dark:text-slate-200 text-xs">
                      {item.dec}
                    </p>
                  </div>
                </div>
                <div className="rotate-90">
                  <IoIosArrowUp />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
      <Card>
        <div className="flex justify-around w-full items-center h-10 space-x-2 text-emerald-500 px-4 py-2">
          <IoNewspaperSharp size={24} />
          <div className="text-gray-500 flex flex-col text-lg w-[80%] font-bold p-2">
            <p className="text-xs whitespace-nowrap font-normal">
              Latest news about tokens
            </p>
            <p>Newsfeed</p>
          </div>
        </div>
        <div className="flex relative md:flex-col w-full overflow-scroll items-center scrollbar-hide sm:space-y-2 gap-2 h-full">
          {newsFeeds.map((item, idx) => (
            <NewsFeedCard
              style={{ top: `${(idx + 1) * 8}px` }}
              heading={item.title}
              details={item.details}
              link={item.link}
              date={item.timestamp}
              key={idx + item.title.slice(10)}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}

export default PrimaryCards
