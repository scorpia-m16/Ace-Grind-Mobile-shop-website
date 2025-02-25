import React, { use, useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible] = useState(false);

    const {setShowSearch , getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    }

  return (
    <div className='flex items-center justify-between py-10 font-medium bg-red-200'>
       
       <Link to={'/'}><img src={assets.logo} className='mx-3 w-36' alt="" /></Link>

       <ul className='hidden sm:flex gap-5 text-sm text-red-600 '>
        <NavLink to='/' className='flex flex-col items-center gap- hover:text-gray-700'>
            <p>HOME</p>
            <hr className='w-2/4 border-b border-gray-700 border-solid h-[1.5] hidden'/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-gray-700'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-b border-gray-700 border-solid h-[1.5] hidden'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-gray-700'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-b border-gray-700 border-solid h-[1.5] hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-gray-700'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-b border-gray-700 border-solid h-[1.5] hidden'/>
        </NavLink>
       </ul>

       <div className="flex items-center gap-4 mx-3">
            <i onClick={()=>setShowSearch(true)} className="ri-search-line cursor-pointer gap-6 text-red-600 hover:text-gray-700"></i>

            <div className="group relative">
                <i onClick={()=> token ? null : navigate('/login') } className="ri-user-line cursor-pointer gap-6 text-red-600 hover:text-gray-700"></i>
                {/* Dropdown Menu */}
                {token &&
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className='flex flex-col gap-2 w-36 px-5 bg-slate-100 text-red-600 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>}
            </div>
            <Link to='/cart' className='relative  hover:text-gray-700'>
                <i className="ri-shopping-bag-line am cursor-pointer gap-6 text-red-600 hover:text-gray-700"></i>
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 text-white aspect-square rounded-full text-[8px] hover:bg-gray-700'>{getCartCount()}</p>
            </Link>
            <i onClick={()=>setVisible(true)} className="ri-menu-line cursor-pointer gap-6 text-red-600 hover:text-gray-700 sm:hidden"></i>
       </div>

        {/* Sidebar menu forsmaller screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition all ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <i className="ri-arrow-down-line cursor-pointer h-4 rotate-90 gap-6 text-red-600 hover:text-gray-700"></i>
                        <p className='text-red-600 hover:text-gray-700'>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-red-600 hover:text-gray-700' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-red-600 hover:text-gray-700' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-red-600 hover:text-gray-700' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-red-600 hover:text-gray-700' to='/contact'>CONTACT</NavLink>
                </div>
        </div>

    </div>
  )
}

export default Navbar;
