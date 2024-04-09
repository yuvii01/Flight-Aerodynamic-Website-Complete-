import React from 'react';

import { FaPlaneDeparture } from "react-icons/fa6";

const Nav = () => {
    return (
        <div className='flex px-[200px] py-5 w-full z-[9999999999] items-center fixed mt-[50px] bg-white shadow'>
           <div>
           <FaPlaneDeparture className='text-3xl ' />
            </div> 
            <div className='ps-[300px]'>
                <ul className='flex gap-10 '>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Offers</li>
                    <li className='cursor-pointer'>Seats</li>
                    <li className='cursor-pointer'>Destinations</li>
                   
                </ul>
            </div>

            <div className='absolute right-[200px] '>
                <button className='bg-blue-500 text-white py-2 px-5 rounded-lg'>Contact</button>
            </div>
        </div>
    );
}

export default Nav;
