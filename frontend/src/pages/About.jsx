import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eveniet omnis fugit assumenda ea, deserunt nihil repudiandae dolores, incidunt voluptates debitis nostrum. Ex id officiis architecto nostrum minima cumque consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus nisi facilis similique repudiandae saepe, quidem reiciendis et aut rerum asperiores assumenda, cum incidunt tenetur quae consequuntur quasi velit nesciunt?</p>
          <b className='text-red-300'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquid veritatis porro optio quas accusamus consequuntur odit! Dignissimos ducimus enim sint neque at error atque eos, saepe libero id quidem.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-red-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum, cupiditate dicta accusantium porro culpa delectus enim repellendus ut, nulla non rem iure veritatis quidem odio, nemo molestiae iste nesciunt?</p>
        </div>
        <div className='border border-red-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla minima minus reiciendis commodi quis veniam, laboriosam blanditiis facere dicta non veritatis tenetur atque incidunt, autem esse, voluptatum error cupiditate dolor.</p>
        </div>
        <div className='border border-red-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nulla amet voluptate facilis quas omnis! Id, corrupti repellat ducimus quisquam a obcaecati accusantium placeat doloremque? Provident ex sapiente totam mollitia.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
