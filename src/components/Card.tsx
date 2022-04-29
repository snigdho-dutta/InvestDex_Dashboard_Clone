import React from 'react'
import { useRecoilValue } from 'recoil'
import { extendMenuState } from '../atoms/atom'

const Card: React.FC<{}> = ({ children }) => {
  const extendMenu = useRecoilValue(extendMenuState)
  return (
    <div
      className={`xl:h-[60vh] max-h-[500px] min-h-[300px] w-8/12 sm:w-6/12 flex flex-col items-center shadow-lg rounded-3xl hover:scale-105 hover:shadow-2xl transition relative p-2 bg-white md:w-4/12 dark:bg-white/10 ${
        extendMenu ? 'xl:w-[45%]' : 'xl:w-[31%]'
      }
    `}
    >
      {children}
    </div>
  )
}

export default Card
