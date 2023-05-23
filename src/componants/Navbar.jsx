import React, { useState } from "react";
import logo from '/Users/lihini/dental/src/Assets/logo.png';
import {FaPhoneAlt, FaCalendarAlt} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
   
   const [nav, setNav] = useState(true)
   const handleNav = () => {
    setNav(!nav)
   }

   
    return(
        <div>
            <div className=" flex justify-between items-center max-w-full "  >
                <div className="flex items-center">
                <img src={logo} className="w-40 h-30"/>
                <div>
                    <p className="text-[#1e2570] text-3xl font-bold uppercase">Happy Dental Care</p>
                    <p className="font-bold uppercase">Negombo</p>
                    <p className="text-[#c61f5d] md:text-md lg:text-xl font-bold uppercase">Weekday | Weekend</p>
                </div>
                </div>
          
                <ul className="hidden sm:block md:flex md:text-md lg:text-lg uppercase font-bold" >
                    <li className="p-4 whitespace-nowrap flex items-center"><FaCalendarAlt size="32" className="mx-2  text-[#1e2570]"/>Book Now!</li>
                    <li className="p-4 flex items-center"><FaPhoneAlt size="32" className="mx-2  text-[#1e2570]"/>
                    <div><p className="text-[#69696d] text-md">Call Us Today</p>
                    <p className="text-2xl">0770565622</p>
                    </div> 
                      </li>
                </ul>
            </div>
            <div className="max-w-full bg-[#1e2570] ">
          <div className=" text-white md:flex justify-around md:items-center max-w-1280 hidden" >
                
                <ul className="flex md:text-xl lg:text-2xl uppercase font-bold cursor-pointer" >
                    <li className="p-4 ">Home</li>
                    <li className="p-4 ">Services</li>
                    <li className="p-4 inline-block whitespace-nowrap">Implant Center</li>
                    <li className="p-4  inline-block whitespace-nowrap">Contact Us</li>
                    <li className="p-4 ">FAQ</li>
                </ul>

               
            </div>
            <div className="flex justify-end mx-4 p-4 md:hidden" onClick={handleNav}> 
            {!nav ? <AiOutlineClose size="28" className="text-white"/>   :   <FiMenu size="28" className="text-white"/> }
          
            </div>
                
            <div className={!nav ?"fixed left-0 top-0 w-[80%] h-full z-20 bg-[#1e2570] ease-in-out duration-500" : 'fixed left-[-100%]'}>
            
            <div className="flex justify-center  ">
                <img src={logo} className="max-w-[30%] max-h-[30%]"/>
            </div>
            <div className="flex justify-center">
            <ul className="text-white uppercase font-bold p-10 text-md" >
                    <li className="p-4 ">Home</li>
                    <li className="p-4 ">Services</li>
                    
                    <li className="p-4 inline-block ">Implant Center</li>
                    <br></br>
                    <li className="p-4  inline-block whitespace-nowrap">Contact Us</li>
                   
                    <li className="p-4 ">FAQ</li>
                    
                </ul>
            </div>
        
            </div>
     
            </div>
        </div>
     
    )
}

export default Navbar
