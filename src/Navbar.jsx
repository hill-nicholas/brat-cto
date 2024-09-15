import React from 'react'
import { useState } from 'react'
import {Link}  from 'react-router-dom'
import bratlogo from '/bratlogo.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

  return (
    <nav className='px-10 md:px-20 flex py-4 justify-between items-center bg-black text-white font-semibold relative'>
    <div className='bg-[#9fd830]'><img src={bratlogo} alt="bratlogo" className='w-32' /></div>
    <ul className='hidden lg:flex gap-6'>
    <li><Link to="/Home">Home</Link></li>
    <li><Link to="/About">About</Link></li>
      <li>Brat Tools</li>
      <li>Shop</li>
      <li className='text-[#c94ff2]'>How to Guide</li>
      <li>FAQ</li>
    </ul>
    <div className='hidden lg:flex gap-2 items-center '>
      <p className='border-r-2 px-5'>cart</p>
      <button className='bg-[#c94ff2] px-4 py-2 rounded-xl text-green-400 text-sm'>Buy Brat</button>
    </div>
    <GiHamburgerMenu onClick={() => {setIsActive(!isActive)}} className='text-[#c94ff2]  lg:hidden' />


    {isActive ?
          
          <div className='fixed top-0 left-0 h-screen w-screen bg-black z-50 text-white flex flex-col items-center pt-28 gap-5'>

          <ul className='flex flex-col gap-4 items-center'>
          <IoCloseSharp onClick={() => {setIsActive(!isActive)}} className='text-2xl' />
          <li><Link to="/Home" onClick={() => {setIsActive(!isActive)}}>Home</Link></li>
          <li><Link to="/About" onClick={() => {setIsActive(!isActive)}}>About</Link></li>
              <li>Brat Tools</li>
              <li>Shop</li>
              <li className='text-[#c94ff2]'>How to Guide</li>
              <li>FAQ</li>
            </ul>
    
            <div className='flex gap-2 flex-col items-center '>
              <p>cart</p>
              <button className='bg-[#c94ff2] px-4 py-2 rounded-xl text-green-400 text-sm'>Buy Brat</button>
            </div>
          </div>:
          <></>
      }
  </nav>
  )
}

export default Navbar