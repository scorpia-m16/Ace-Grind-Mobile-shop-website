import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom'; 


const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-[#f4e5ec] py-20 px-4 md:px-16 lg:px-24"> {/* Main container */}
      <div className="md:w-1/2 text-center md:text-left"> 
        <h4 className="uppercase text-gray-600 mb-4 font-medium"><b>Ace Grind Mobile Shop</b></h4> {/* Subheading */}
        <h1 className="prata-regular text-red-600 text-4xl md:text-5xl lg:text-6xl mb-8">MOBILE ACTIVATION LOCK!</h1> {/* Main heading */}
        <p className="text-lg text-gray-700 mb-8">Still Active....Bring Your Orders For Unlocking....Icloud,SIM Unlocked,Flashing,Bypass Etc🔥✔👌Active Always...<br/><i><b><span className='text-red-600'>MOTTO: </span>Lets Smile 😊 Together</b></i></p> {/* Paragraph */}
        <Link to="/contact" className="bg-red-600 hover:bg-gray-600 active:bg-red-600 transition-[0.5s] text-white font-medium py-3 px-6 rounded-lg">
          Contacy Us Now
        </Link> 
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0"> 
        <img src={assets.hero_img} alt="Hero Image" className="w-140 h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Hero;