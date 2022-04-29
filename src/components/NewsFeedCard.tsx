import React from 'react'
import Moment from 'react-moment'
import { ImAttachment } from 'react-icons/im'
import { MdCircle, MdOutlineEventNote } from 'react-icons/md'

const NewsFeedCard: React.FC<{
  heading: string
  details: string
  date: Date
  link: string
  className?: string
  style: any
}> = ({ heading, details, date, link, className, style }) => {
  return (
    <div
      className={`rounded-md justify-around sm:customShadow border-2 min-h-[200px] sm:min-h-[300px] sm:h-6/6 sm:border-none rounded-b-3xl max-w-[300px] xl:max-w-[99%] flex flex-col sm:w-[96%] dark:bg-[#484848]  bg-white px-1 pt-3 py-2 sm:sticky ${className}`}
      style={{ ...style }}
    >
      <MdCircle size={10} className="absolute text-emerald-500 top-[2.5rem]" />
      <h1 className="text-green-500 pt-2 font-bold w-full px-1 ml-2 ">
        {heading}
      </h1>
      <p className="w-full mt-3 dark:text-teal-50 mb-2 text-gray-500 text-sm min-w-[280px] sm:min-w-fit">
        {details.length < 200 ? details : details.slice(0, 200) + '...'}
      </p>
      <div className="w-full justify-between items-center flex group text-gray-500 dark:text-white">
        <a
          href={link}
          className="p-[0.5px] px-2 flex items-center text-orange-500 font-semibold bg-red-500/20 rounded-lg hover:shadow-md shadow-red-500"
        >
          <ImAttachment />
          <span className="capitalize text-sm group-hover:underline">
            {new URL(link).hostname.replace('.com', '')}
          </span>
        </a>
        <Moment
          className="text-gray-500 dark:text-white text-sm font-medium"
          fromNow={true}
        >
          {date}
        </Moment>
        <MdOutlineEventNote />
      </div>
    </div>
  )
}

export default NewsFeedCard
