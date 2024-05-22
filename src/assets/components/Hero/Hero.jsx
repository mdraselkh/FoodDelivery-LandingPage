import React from 'react'
import heroBg1 from "..//..//images/heroBG.png";
import Slider from 'react-slick';
import heroimg from "..//..//images/Preset.png";
import "./Hero.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'




const Hero = () => {
   
  
  return (
    <div className="relative w-full md:w-full md:h-min">
      <img src={heroimg} alt="" className='object-cover w-full h-[600px] md:bg-cover md:bg-center md:h-min'/>
      <div className="absolute inset-0 flex flex-col items-center justify-start px-4 ">
          <h1 className="text-4xl font-bold text-center text-white mt-44 md:text-5xl">
            Your favorite food, delivered to you
          </h1>
          <div className="flex items-center w-full max-w-lg mt-16 overflow-hidden bg-white rounded-full shadow-lg md:w-full md:max-w-[700px]">
          <FontAwesomeIcon icon={faLocationDot} style={{color: "#f4b062", marginLeft:"25px",fontSize:"20px"}} />
          <p className='text-center text-gray-400 md:border-r-2 md:border-gray-200 md:whitespace-break-spaces md:ml-6'>New York    </p>
          
            <input
              type="text"
              placeholder=""
              className="flex-grow px-4 py-2 outline-none md:py-4 md:px-6"
            />
            <button className="px-2 py-6 text-white transition-colors duration-200 rounded-r-full hover:bg-primary bg-secondary md:px-8 md:py-4">
              Search
            </button>
          </div>
        </div>
    </div>
  )
}

export default Hero
