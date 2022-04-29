import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import { useRecoilValue } from 'recoil'
import { cryptoState } from '../atoms/atom'
import { cryptoCurrencies } from '../utils/drawerNav'

const SearchModal = () => {
  const currentCrypto = useRecoilValue(cryptoState)
  return (
    <div className="w-full text-gray-500 font-bold text-lg py-2 shadow-lg rounded-lg absolute bg-gray-300 z-10 dark:bg-[#18151c] dark:text-white flex flex-col top-16 left-0">
      <h1 className="px-4">Networks</h1>
      <div className="flex gap-x-4 gap-y-2 p-2 scrollbar-hide overflow-scroll">
        {cryptoCurrencies.map((item, idx) => (
          <li
            className={`flex p-2 space-x-2 h-8 whitespace-nowrap items-center bg-gray-200 dark:bg-[#55557b6c] dark:border-gray-500 rounded-2xl min-w-[140px] transition cursor-pointer hover:scale-105 border text-sm font-semibold justify-center ${item.color}`}
            key={item.name + idx}
          >
            <img src={item.image} alt={item.name} className="w-5 h-5" />
            <p>{item.name}</p>
            {item.name === currentCrypto.name && <BiCheckCircle size={24} color="green"/>}
          </li>
        ))}
      </div>
    </div>
  )
}

export default SearchModal
