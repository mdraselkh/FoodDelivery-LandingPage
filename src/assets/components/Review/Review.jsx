import React from 'react'
import Slider from 'react-slick';
import rec from '..//..//images/Rectangle.png'
import circle from '..//..//images/circle.png'
import logo1 from '..//..//images/logo1.png'
import logo2 from '..//..//images/logo2.png'
import logo3 from '..//..//images/logo3.png'
import logo4 from '..//..//images/logo4.png'
import logo5 from '..//..//images/logo5.png'

const Review = () => {
   const settings = {
      dots:false,
      arrows: true,  // Add this line to remove arrows
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      };
      
  return (
    <div className='w-full px-12 my-10 md:px-32'>
      <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl font-semibold text-center text-black md:text-4xl'>What our food lovers said</h2>
          <p className='px-6 mt-5 text-sm font-normal text-center text-black md:px-44'>In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands upon the soul, something inherently mysterious in the forms it takes</p>
          
          
          <div className='relative h-64 px-4 mt-8 md:mt-16 md:h-72'>
          
            <img src={rec} alt="" className='object-cover w-full h-full rounded-3xl '/>
            <img src={circle} alt="" className='absolute inset-0 px-32 py-2 md:py-4 md:px-[240px]'/>
            <p className='absolute inset-0 px-12 py-24 text-white md:px-28 md:py-32'>In the artist's own experience, of course, art is fundamentally indefinable, unsayable</p>
            <p className='absolute inset-0 px-12 pt-48 text-sm text-secondary md:px-36 md:py-56'>Tim Oliver, ordered Burger Extracheese</p>
           
          </div>
          
          
          
          <div className='grid grid-cols-2 mt-10 md:grid-cols-5 md:mt-12'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            </div>
          
          
            
         
      </div>
    </div>
  )
}

export default Review