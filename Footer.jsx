import React from 'react';
import { FaPlaneDeparture } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='w-full h-auto bg-gray-200 py-[100px]'>
            <div className='w-[1200px] mx-auto text-center'>



            <div className='font-semibold text-4xl mb-[50px]'>
                Subscribe Newsletter & get latest News
            </div>
            <div>
               <div className='flex px-[100px] py-2  w-full bg-white rounded-full gap-5'>
<input className='w-full px-5' type="email" placeholder='Enter Your Email Address' /> <button className='inline px-[100px] rounded-full py-1 bg-blue-500 text-white'>Subscribe</button>
               </div>
            </div>

<div className='grid grid-cols-4 gap-10 my-10'>

<div >
<div >
<FaPlaneDeparture className='text-3xl mx-10' />

</div>
<div className='my-4'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, veritatis!
</div>

<div className='flex gap-5 justify-center'>
<div className='h-[50px] justify-center flex items-center w-[30px] border rounded-full border-black'>
<FaFacebookF />
</div>
<div className='h-[50px] justify-center flex items-center w-[30px] border rounded-full border-black'>
<FaTwitter />
</div>
<div className='h-[50px] justify-center flex items-center w-[30px] border rounded-full border-black'>
    
<FaYoutube/>
</div>
<div className='h-[50px] justify-center flex items-center w-[30px] border rounded-full border-black'>
<FaPinterestP />
</div>

</div>
</div>







<div className='text-start'>
<div className='font-semibold text-lg'>
    Information
</div>

<div className='text-gray-600 font-semibold '>
    <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Flight Status</li>
        <li> Travel</li>
        <li> Check-In</li>
        <li> Manage your booking</li>
    </ul>
</div>
</div>


<div className='text-start'>
<div className='font-semibold text-lg'>
   Quick Guide
</div>

<div className='text-gray-600 font-semibold '>
    <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Flight Status</li>
        <li> Travel</li>
        <li> Check-In</li>
        <li> Manage your booking</li>
    </ul>
</div>
</div>



<div className='text-start'>
<div className='font-semibold text-lg'>
    Information
</div>

<div className='text-gray-600 font-semibold '>
    <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Flight Status</li>
        <li> Travel</li>
        <li> Check-In</li>
        <li> Manage your booking</li>
    </ul>
</div>
</div>

</div>


            </div>
        </div>
    );
}

export default Footer;
