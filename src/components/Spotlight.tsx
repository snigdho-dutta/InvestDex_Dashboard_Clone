import React, { useState } from 'react'
import { AiFillHome, AiOutlineTwitter, AiFillEye } from 'react-icons/ai'
import { spotLightItems } from '../data/dummyData'

const Card: React.FC<{
  name: string
  tag: string
  image: string
  desc: string
  homeUrl: string
  twitterUrl: string
}> = ({ name, tag, image, desc, homeUrl, twitterUrl }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div
      className={`rounded-[30px] text-gray-500 dark:bg-dark2 dark:text-white bg-white shadow-md flex flex-col items-center md:w-[30%] xl:min-w-[200px] xl:w-[23.5%] sm:w-[30%] p-2 min-w-[250px] space-y-3 relative
      ${readMore && desc.length > 70 && 'rounded-b-3xl'}
      `}
    >
      <h3 className="font-bold break-words w-full text-center p-0 -mb-5">
        {name}
      </h3>
      <div className="flex w-full justify-between items-center p-2">
        <img
          src={image}
          alt={name}
          className="w-[40px] h-[40px] rounded-full object-fill object-center"
        />
        <h6 className="text-xs font-semibold max-w-[65%] break-words">{tag}</h6>
        <div className="flex space-2 text-gray-500">
          <a href={homeUrl}>
            <AiFillHome color="#ee6d11" />
          </a>
          <a href={twitterUrl}>
            <AiOutlineTwitter color="#0ebcdf" />
          </a>
        </div>
      </div>
      <div className="w-full p-2">
        <div className="flex items-center w-fit text-sm space-x-1 text-blue-500 dark:text-indigo-500 bg-blue-500/20 dark:bg-indigo-500/20 px-2 rounded-md">
          <AiFillEye />
          <p>Details</p>
        </div>
      </div>
      <div
        className={`text-sm relative dark:bg-dark2 w-[105%] bg-white xl:w-[108%] min-h-[60px]`}
        onMouseLeave={() => setReadMore(false)}
      >
        {readMore && desc.length > 70 ? (
          <p className="z-10 absolute bg-white dark:bg-dark2 top-[50%] w-full left-0 pb-10 shadow-md rounded-b-3xl p-2 pt-0 -mt-6">
            {desc.length < 500 ? desc : desc.slice(0, 500) + '...'}
          </p>
        ) : (
          <p className="p-2 dark:bg-dark2">
            {desc.length < 70 ? desc : desc.slice(0, 70) + '...'}
          </p>
        )}
      </div>

      <div
        className="px-2 text-sm self-end rounded-md text-blue-500 dark:text-indigo-500"
        onMouseEnter={(e) => {
          setReadMore(true)
        }}
      >
        <button>Read More</button>
      </div>
    </div>
  )
}

const Spotlight = () => {
  return (
    <div className="w-full">
      <div className="font-semibold items-baseline dark:text-white flex space-x-4 p-2">
        <h1 className="text-2xl font-bold">Spotlight</h1>
        <p className="text-shadow-md text-gray-500 dark:text-gray-300">
          9 Projects
        </p>
      </div>
      <div className="flex w-full justify-start sm:justify-between md:justify-center xl:justify-center items-center md:py-10 md:flex-wrap gap-[1rem] overflow-scroll scrollbar-hide">
        {spotLightItems.map((item, idx) => {
          const {
            name,
            tag,
            desc,
            image,
            twitter: twitterUrl,
            home: homeUrl,
          } = item
          return (
            <Card
              {...{ name, key: idx, tag, desc, image, twitterUrl, homeUrl }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Spotlight
