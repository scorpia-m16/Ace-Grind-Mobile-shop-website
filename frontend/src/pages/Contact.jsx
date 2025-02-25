import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-10'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col  justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-[12px] text-red-500'>Get IN TOUCH</p>
            <h2 className='font-[26px] text-gray-600'>Visit our Location or contact us today</h2>
            <h3 className='font-[16px] text-red-500'>Our Office</h3>
            <div className='text-gray-700'>
                <li className='list-none'>
                    <i class="ri-map-line"></i>
                    <p>Accra(Circle) Ghana</p>
                </li>
                <li className='list-none'>
                    <i class="ri-phone-line"></i>
                    <p>+233 27 934 0226</p>
                </li>
                <li className='list-none'>
                    <i class="ri-time-line"></i>
                    <p>Monday to Saturday: 8.00am to 18.pm</p>
                </li>
            </div>
        </div>
        <div className='w-[400px] h-[400px] mb-20'>
            <iframe className='w-[100%] h-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.972400306974!2d-0.21778132595943048!3d5.571098533499626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a055f196beb%3A0x865e3a2e504c1851!2s15%20Tip%20Toe%20Ln%2C%20Accra!5e0!3m2!1sen!2sgh!4v1726484325791!5m2!1sen!2sgh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact
