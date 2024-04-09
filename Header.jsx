import React from 'react';
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { BiSolidPlanet } from "react-icons/bi";

const Header = () => {
    return (
        <div className=' px-[100px] py-5 border-b z-[9999999999] fixed bg-white  '>
           <div className='flex justify-between'>
           <div>
            <BiSolidPlanet className='text-2xl cursor-pointer' />
            </div>
            <div className='ps-[450px] '>
              <ul className='flex gap-5'>
                <li className='flex items-center gap-2 cursor-pointer'> <MdOutlineSupportAgent className='text-2xl cursor-pointer ' /> Support</li>
                <li className='flex items-center gap-2 cursor-pointer'> <IoGlobeOutline className='text-2xl cursor-pointer '/> Languages</li>
                </ul>  
            </div>

            <div>
               <ul className='flex gap-5 ps-[250px]'>
                <li className='cursor-pointer'>Sign In</li>
                <li className='cursor-pointer'>Sign Out</li>
                </ul> 
            </div>
           </div>
        </div>
    );
}

export default Header;
