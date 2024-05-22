import React from "react";
import foodimg from "..//.//..//images/Images.png";


const About = () => {
  return (
    <div className="w-full px-10 mt-16 md:mt-20 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-10 w-max-lg">
          <img src={foodimg} alt="" className="object-cover " />
        </div>
        <div className="w-full h-full bg-white">
          <div className="flex items-center justify-center px-10 py-8 ml-auto mr-auto md:p-28">
            <div className="text-left">
              <h2 className="w-full h-full text-3xl font-semibold leading-tight text-black md:text-4xl ">
                Take a taste, come join us. Life is so endlessly delicious
              </h2>
              <p className="mt-5 text-[#545454] md:mt-8">
                 In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands upon the soul, something inherently mysterious in the forms it takes
              </p>
              
              <button className="px-8 py-3 mt-8 font-semibold text-white hover:bg-primary sm:mt-4 bg-secondary rounded-s-full rounded-e-full md:mt-10 whitespace-nowrap">
                Download Our App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
