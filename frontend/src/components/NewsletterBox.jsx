import React from 'react'

const NewsletterBox = () => {

        const onSubmitHandler = (event) => {
            event.preventDefault();
        }

  return (
    <div className='text-center mt-20 '>
      <p className='text-2xl font-medium text-red-600'>Sign Up For Newsletters</p>
      <p className='text-gray-400 mt-3'>
      Get E-mail updates about our latest shop and <span className='text-red-600'>special offers</span>.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email' required/>
        <button type='submit' className='bg-red-600 text-white text-xs px-10 py-4 cursor-pointer hover:bg-gray-600 active:bg-red-600 transition-[0.5s]'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
