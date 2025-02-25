import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-12 sm:gap-2 justify-center text-center py-20 text-xs sm:text-sm md-text-base text-red-600 bg-red-100'>
       
    <div>
        <img src={assets.exchange_icon} className='w-40 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchnge policy</p>
    </div>
    <div>
        <img src={assets.quality_icon} className='w-40 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
    </div>
    <div>
        <img src={assets.save_money} className='w-40 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best Customer Money Savings</p>
        <p className='text-gray-400'>We reduces prices to help customer to save money</p>
    </div>
    <div>
        <img src={assets.happy_sell} className='w-40 m-auto mb-5' alt="" />
        <p className='font-semibold'>Happy Sales</p>
        <p className='text-gray-400'>We want you to have the best shopping experience during our Happy Sale!</p>
    </div>

    </div>
  )
}

export default OurPolicy
