import React from 'react'
import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-red-300'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='mt-2 w-12px cursor-pointer bg-red-600 hover:bg-gray-600 active:bg-red-600 transition-[0.5s] text-white font-medium py-3 px-6 rounded-lg sm:px-7 sm:py-2 text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar