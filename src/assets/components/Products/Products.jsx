import React from "react";
import leg from "..//..//images/Combined Shape.png";
import spoon from "..//..//images/spoon.png";
import icon from "..//..//images/Icon.png";

const Products = () => {
  return (
    <div className="w-full px-20 py-8 md:mt-216 md:px-30">
      <div className="text-center">
        <p className="text-3xl font-semibold text-black md:text-4xl">
          How it Works
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-3 md:gap-10 md:px-32 md:mt-20">
        <div className="relative bg-white  shadow-md border-white md:h-[350px] rounded-3xl border-r-4">
          <img
            src={icon}
            alt=""
            className="px-24 mt-8 bg-transparent bg-primary opacity-20 md:px-32"
          />

          <p className="px-5 mt-5 text-lg font-semibold text-center text-primary md:text-2xl md:mt-10">
            Order via App
          </p>
          <p className="px-8 mt-5 mb-8 text-sm font-normal text-center md:mt-8 md:text-md ">
            In the artist's own experience, of course, art is fundamentally
            indefinable, unsayable; there is something sacred about its demands
          </p>
        </div>
        
        <div className="relative bg-white  shadow-md border-white md:h-[350px] rounded-3xl border-r-4">
          <img
            src={spoon}
            alt=""
            className="px-24 mt-8 bg-transparent bg-primary opacity-20 md:px-32"
          />

          <p className="px-5 mt-5 text-lg font-semibold text-center text-primary md:text-2xl md:mt-10">
            Choose your food
          </p>
          <p className="px-8 mt-5 mb-8 text-sm font-normal text-center md:mt-8 md:text-md ">
            In the artist's own experience, of course, art is fundamentally
            indefinable, unsayable; there is something sacred about its demands
          </p>
        </div>

        <div className="relative bg-white  shadow-md border-white md:h-[350px] rounded-3xl border-r-4">
          <img
            src={leg}
            alt=""
            className="px-24 mt-8 bg-transparent bg-primary opacity-20 md:px-32"
          />

          <p className="px-5 mt-5 text-lg font-semibold text-center text-primary md:text-2xl md:mt-10">
            Enjoy!
          </p>
          <p className="px-8 mt-5 mb-8 text-sm font-normal text-center md:mt-8 md:text-md ">
            In the artist's own experience, of course, art is fundamentally
            indefinable, unsayable; there is something sacred about its demands
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
