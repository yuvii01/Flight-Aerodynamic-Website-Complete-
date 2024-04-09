import React, { useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Footer from './Components/Footer';


const App = () => {

  useEffect(()=>{
    Aos.init()
  },[])

return (
<div>
     <Header/> 
     <Nav/>


     <div className='relative w-full pt-[200px]'>
      <div className='text-center text-6xl font-bold tracking-wide pt-[70px]' >
        Create Ever-lasting <br /> Memories with Us
      </div>
      <div className='absolute left-[280px] top-[350px]'>
        <img src="/images/image.png" className="z-[9999]  w-[850px] left-[250px]" alt="" />
      </div>

      <div className='h-[250px] rounded-full overflow-hidden  w-auto mx-[300px] mt-[130px]  '>
        <video autoPlay muted loop src="/images/video.mp4" className='h-auto w-full '></video>
      </div>
     </div>


     <div  data-aos="fade-up" data-aos-duration="5000" className=' mt-[200px] mb-[50px] flex justify-between py-5 w-[600px] rounded-full font-semibold bg-gray-300 px-8 mx-auto '>
<div>
  Economy
</div>
<div>
  Business Class
</div>
<div>
  First Class
</div>
     </div>

     <div data-aos="fade-up" data-aos-duration="5000" className=' mt-[30px] flex justify-between py-3  rounded-full font-semiboldpx-8 mx-[100px] '>
<div className='grid grid-cols-4 w-[250px] '>
  <div className='text-4xl  py-4 text-center  bg-gray-200 rounded-full w-[60px] h-[80px] ps-3  '>
  <FaLocationDot />
  </div>
  <div className='text-start col-span-3 ps-3
  '>
  <div className='text-2xl font-semibold'>
  Location
  </div>
  <div className='text-gray-400 text-md py-3 '>
    Where do you want to
  </div>
  </div>
</div>




<div className='grid grid-cols-4 w-[250px] '>
  <div className='text-4xl  py-4 text-center  bg-gray-200 rounded-full w-[60px] h-[80px] ps-3  '>
  <FaLocationDot />
  </div>
  <div className='text-start col-span-3 ps-3
  '>
  <div className='text-2xl font-semibold'>
  Travelers
  </div>
  <div className='text-gray-400 text-md py-3 '>
    Add Guests
  </div>
  </div>
</div>






<div className='grid grid-cols-4 w-[250px] '>
  <div className='text-4xl  py-4 text-center  bg-gray-200 rounded-full w-[60px] h-[80px] ps-3  '>
  <FaLocationDot />
  </div>
  <div className='text-start col-span-3 ps-3
  '>
  <div className='text-2xl font-semibold'>
  Check In
  </div>
  <div className='text-gray-400 text-md py-3 '>
    Add Date
  </div>
  </div>
</div>






<div className='grid grid-cols-4 w-[250px] '>
  <div className='text-4xl  py-4 text-center  bg-gray-200 rounded-full w-[60px] h-[80px] ps-3  '>
  <FaLocationDot />
  </div>
  <div className='text-start col-span-3 ps-3
  '>
  <div className='text-2xl font-semibold'>
  Check Out
  </div>
  <div className='text-gray-400 text-md py-3 '>
    Add Date
  </div>
  </div>
</div>


<div>
  <button className='px-[70px] py-2 rounded-full bg-blue-600 text-white '>Search Flight</button>
</div>
</div>

<div className='mx-auto  w-[800px] text-center mt-[100px] '>
<div   className='tracking-widest mt-4 text-2xl'>
TRAVEL SUPPORT
</div>
<div className='font-semibold text-3xl mt-5 tracking-wide'>
  Plan your travel with Confidence
</div>
<div className='mt-4 text-gray-400 text-sm'>
  Find help with booking and travel plans, see what to expext along the journey!
</div>
</div>

<div className='grid grid-cols-2  font-sans'>

  <div className='w-1/2 mx-auto my-[100px]'>
  <div data-aos="fade-down" className=''>
<div className='px-3 font-semibold py-1 text-white bg-blue-700 rounded-full  h-[30px] w-[40px] '>
01
</div>
<div className='font-bold text-2xl my-2 '>
  Travel requirements for Dubai
</div>

<div className='text-sm text-gray-500 my-2 font-semibold'>
Find help with booking and travel plans ,see what to expect along he journey to your favourite destination!
</div>

</div>





<div data-aos="fade-down" className=' my-5'>
<div className='px-3 font-semibold py-1 text-white bg-[orange] rounded-full  h-[30px] w-[40px] '>
02
</div>
<div className='font-bold text-2xl my-2 '>
 Chauffeur services at your arrival
</div>

<div className='text-sm text-gray-500 my-2 font-semibold'>
Find help with booking and travel plans ,see what to expect along he journey to your favourite destination!
</div>

</div>





<div data-aos="fade-down" className=''>
<div className='px-3 font-semibold py-1 text-white bg-red-300 rounded-full  h-[30px] w-[40px] '>
03
</div>
<div className='font-bold text-2xl my-2 '>
 Multi-risk travel insurance
</div>

<div className='text-sm text-gray-500 my-2 font-semibold'>
Find help with booking and travel plans ,see what to expect along he journey to your favourite destination!
</div>

</div>
  </div>

  <div data-aos="fade-up" className='relative mt-[100px] mx-[150px]'>
    <div className='absolute z-[3] h-[auto] rounded-full overflow-hidden w-[200px] top-[100px] '>
<img src="/images/img1.jpg" alt="" className='h-full w-full' />
    </div>
    <div className='absolute z-[2] h-[auto] rounded-full overflow-hidden left-[120px] w-[210px]  '>
<img src="/images/img2.jpg" alt="" />
    </div>
    <div className='absolute  h-[auto] rounded-full overflow-hidden w-[150px] top-[160px] left-[250px]  '>
<img src="/images/img3.jpg" alt="" />
    </div>
  </div>

</div>

<div className='w-full h-full bg-gray-200 py-[100px] '>
<div className='w-[1000px] mx-auto '>
 
  <div className='flex gap-[200px] '>
  <div data-aos="fade-down" className='font-bold text-2xl  '>
    Travel to make memories all <br /> around the world 
  </div>

  <div data-aos="fade-left" className='ps-[200px]'>
    <button className='px-5 bg-blue-600 py-2 rounded-full text-white text-center '>View All</button>
  </div>

  </div>





  <div data-aos="fade-up" className='grid grid-cols-3 pt-[100px]'>
<div className='h-[300px] py-10 w-[250px] rounded-full text-center bg-white  '>
<div className=' mx-auto my-3 px-3 font-semibold py-2 text-white bg-blue-600 rounded-full  h-[40px] w-[40px] '>
<FaCalendarAlt/>
</div>

<div className='text-xl  my-3 font-semibold '>
  Book & Relax
</div>

<div  className='text-sm  text-gray-500 my-4 font-semibold px-5' >
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatibus deleniti?
</div>
</div>






<div className='h-[300px] py-10 w-[250px] rounded-full text-center bg-white  '>
<div className=' mx-auto my-3 px-3 font-semibold py-2 text-white bg-[orange] rounded-full  h-[40px] w-[40px] '>
<FaCalendarAlt/>
</div>

<div className='text-xl  my-3 font-semibold '>
  Book & Relax
</div>

<div  className='text-sm  text-gray-500 my-4 font-semibold px-5' >
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatibus deleniti?
</div>
</div>







<div className='h-[300px] py-10 w-[250px] rounded-full text-center bg-white  '>
<div className=' mx-auto my-3 px-3 font-semibold py-2 text-red-300 bg-blue-600 rounded-full  h-[40px] w-[40px] '>
<FaCalendarAlt/>
</div>

<div className='text-xl  my-3 font-semibold '>
  Book & Relax
</div>

<div  className='text-sm  text-gray-500 my-4 font-semibold px-5' >
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatibus deleniti?
</div>
</div>
</div>


</div>



</div>

<div className='w-[1000px] mx-auto grid grid-cols-2 mt-[100px]'>

  <div>
    <div data-aos="fade-down" className='text-3xl font-semibold  mb-5 '>
      Unaccompainted Minor Lounge
    </div>
    <div className='grid grid-cols-2  gap-5'>
<div>
  <div data-aos="fade-down" className='my-5'>
<div className='font-semibold text-gray-700'>
  Help through the airport
</div>
<div className='text-gray-400 text-sm '>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nemo maiores dolor hic impedit officiis nostrum veniam quam dolorem.
</div>
  </div>
  <div data-aos="fade-down"  className='my-5'>
<div className='font-semibold text-gray-700'>
  Care on the Flight
</div>
<div className='text-gray-400 text-sm '>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nemo maiores dolor hic impedit officiis nostrum veniam quam dolorem.
</div>
  </div>
 
</div>



<div>
  <div data-aos="fade-down"  className='my-5'>
<div className='font-semibold text-gray-700'>
 Priority Boarding
</div>
<div className='text-gray-400 text-sm '>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nemo maiores dolor hic impedit officiis nostrum veniam quam dolorem.
</div>
  </div>
  <div data-aos="fade-down"  className='my-5'>
<div className='font-semibold text-gray-700'>
Chauffeur-drive service
</div>
<div className='text-gray-400 text-sm '>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nemo maiores dolor hic impedit officiis nostrum veniam quam dolorem.
</div>
  </div>
 
</div>


    </div>
  </div>


  <div data-aos="fade-down" className='relative '>
  <div className='absolute w-[200px] rounded-full overflow-hidden h-[300px] top-[50px] left-[200px]'>
<img className="h-full w-full" src="/images/flight_1.png" alt=""  />
    </div>

    <div className='absolute z-[3] rounded-full overflow-hidden h-[250px] w-[170px] top-[150px] left-[320px] '>
<img src="/images/flight_2.jpg" alt="" className='h-full w-full' />
    </div>


  </div>

</div>



<div className='mx-auto gap-5 w-[1200px] mt-[50px] '>
<div className='font-semibold text-3xl text-center my-[100px]'>
  Top travelers of this month!
</div>

<div className='grid grid-cols-4 gap-10 mb-[100px]'>
<div data-aos="fade-up" className=' relative rounded-full overflow-hidden h-[450px] w-[290px]'>
  <img className='h-full w-full' src="/images/endimg1.jpg" alt="" />
<div className='absolute animate-bounce duration-150 rounded-full top-[250px] left-[120px] h-[50px] overflow-hidden w-[50px] '>
<img className='h-full w-full border border-black ' src="/images/h1.jpg" alt="" />
</div>
</div>


<div data-aos="fade-up" className=' relative rounded-full overflow-hidden h-[450px] w-[290px]'>
  <img className='h-full w-full' src="/images/endimg2.jpg" alt="" />
<div className='absolute animate-bounce duration-150 rounded-full top-[250px] left-[120px] h-[50px] overflow-hidden w-[50px] '>
<img className='h-full w-full border border-black ' src="/images/h2.jpg" alt="" />
</div>
</div>



<div data-aos="fade-up" className=' relative rounded-full overflow-hidden h-[450px] w-[290px]'>
  <img className='h-full w-full' src="/images/endimg3.png" alt="" />
<div className='absolute animate-bounce duration-150 rounded-full top-[250px] left-[120px] h-[50px] overflow-hidden w-[50px] '>
<img className='h-full w-full border border-black ' src="/images/h3.jpg" alt="" />
</div>
</div>




<div data-aos="fade-up" className=' relative rounded-full overflow-hidden h-[450px] w-[290px]'>
  <img className='h-full w-full' src="/images/endimg4.png" alt="" />
<div className='absolute animate-bounce duration-150 rounded-full top-[250px] left-[120px] h-[50px] overflow-hidden w-[50px] '>
<img className='h-full w-full border border-5 border-black ' src="/images/h4.jpg" alt="" />
</div>
</div>
</div>
</div>

<Footer/>
    </div>
  );
}



export default App;
