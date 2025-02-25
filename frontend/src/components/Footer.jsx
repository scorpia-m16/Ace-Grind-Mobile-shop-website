// import React from 'react'
// import {assets} from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='bg-black'>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 gap-14 my-10 mt-40 text-sm'></div>

//         <div>
//             <img src={assets.logo} className='mb-5 w-32' alt="logo" />
//             <p className='w-full lg:w-1/3 md:w-2/3 text-white'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint voluptatibus, voluptatum alias, reiciendis eveniet, magni consequatur earum quisquam fuga ducimus porro non delectus nostrum ex pariatur officia rem consequuntur.
//             </p>
//         </div>

//         <div>
//             <p className='text-x1 mt-5 text-red-400 font-medium mb-5'>COMPANY</p>
//             <ul className='flex flex-col gap-1 text-white'>
//                 <li>Home</li>
//                 <li>Delivery</li>
//                 <li>Privacy policy</li>
//             </ul> 
//         </div>

//         <div>
//             <p className='text-xl text-red-400 font-medium mb-5'>GET IN TOUCH</p>
//             <ul className='flex flex-col gap-1 text-white'>
//                 <li>Phone/WhatsApp: +233 27 934 0226</li>
//                 <li>Location: Accra Circle</li>
//             </ul>
//         </div>

//         <div>
//             <p className='text-xl text-red-400 font-medium mb-5'>GET IN TOUCH</p>
//             <ul className='flex flex-col gap-1 text-white'>
//                 <li>TikTok: paasony....</li>
//                 <li>Telegram: paasony</li>
//                 <li>Facebook: paasony</li>
//                 <li>Email: paasony@gmail.com</li>
//             </ul>
//         </div>

//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm"> 
          <div>
            <img src={assets.logo} className="mb-5 w-32" alt="logo" /> 
            <p className="text-white text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint voluptatibus, voluptatum alias, reiciendis eveniet, magni consequatur earum quisquam fuga ducimus porro non delectus nostrum ex pariatur officia rem consequuntur.
            </p>
          </div>

          <div>
            <p className="text-xl mt-5 text-red-400 font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-white">
              <li>Home</li>
              <li>About us</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <p className="text-xl text-red-400 font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-white">
              <li>Phone/WhatsApp: +233 27 934 0226</li>
              <li>Location: Accra Circle</li>
              <li>Hours:8:00 - 18:00, Mon - Sat</li>
            </ul>
          </div>

          <div>
            <p className="text-xl text-red-400 font-medium mb-5">FOLLOW US ON</p>
            <ul className="flex flex-col gap-1 text-white">
              <li>TikTok: paasony....</li>
              <li>Telegram: paasony</li>
              <li>Facebook: paasony</li>
              <li>Email: paasony@gmail.com</li>
            </ul>
          </div>

        </div>

        <div>
            <hr className='text-white'/>
            <p className='py-5 text-sm text-center text-white'>Copyright 2025 - Ace Grind Phones Accessories</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
