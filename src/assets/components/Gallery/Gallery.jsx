import React from "react";
import images1 from "..//..//images/img1.png";
import images2 from "..//..//images/img2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBowlFood, faClock ,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import res1 from "..//..//images/res1.png";
import res2 from "..//..//images/res2.png";
import res3 from "..//..//images/res3.png";
import res4 from "..//..//images/res4.png";
import res5 from "..//..//images/res5.png";

const Gallery = () => {
  return (
    <div className="w-full px-16 py-20 md:px-20">
      <div className="flex flex-row items-center justify-between">
        <h2 className="mr-16 text-3xl font-semibold text-start md:text-4xl md:px-16">Popular On New York area</h2>
        <button className="font-semibold text-md md:text-lg md:px-10">View All <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 mt-16 md:grid-cols-2 md:gap-0 md:mt-20 md:px-10">
        <div className="flex flex-col items-center justify-between">
          <img src={res1} alt=""  className="md:-ml-16 md:object-contain md:h-[500px]"/>
          <div className="flex flex-row items-center justify-between">
            <div className="p-1 mt-3 md:mt-4 md:mr-8">
              <p className="text-lg font-semibold">Restaurant Name</p>
              <p>
                <FontAwesomeIcon icon={faBowlFood}/>  $ 9.99 Delivery Fee
              </p>
            </div>
            <p className="md:md:mr-14">
              <FontAwesomeIcon icon={faClock}   className="ml-3 "/> 10 - 15 mins
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:-ml-28">
        <div className="flex flex-col items-center justify-between md:justify-normal ">
          <img src={res2} alt="" />
          <div className="flex flex-row items-center justify-between">
            <div className="p-1 mt-3">
              <p className="text-lg font-semibold">Restaurant Name</p>
              <p>
                <FontAwesomeIcon icon={faBowlFood}/>  $ 9.99 Delivery Fee
              </p>
            </div>
            <p>
              <FontAwesomeIcon icon={faClock}   className="ml-3"/> 10 - 15 mins
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between md:justify-normal">
          <img src={res3} alt="" className="mt-8 md:mt-0"/>
          <div className="flex flex-row items-center justify-between">
            <div className="p-1 mt-3">
              <p className="text-lg font-semibold">Restaurant Name</p>
              <p>
                <FontAwesomeIcon icon={faBowlFood}/>  $ 9.99 Delivery Fee
              </p>
            </div>
            <p>
              <FontAwesomeIcon icon={faClock}   className="ml-3"/> 10 - 15 mins
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between md:justify-normal md:-mt-12">
          <img src={res4} alt="" className="mt-8"/>
          <div className="flex flex-row items-center justify-between">
            <div className="p-1 mt-3">
              <p className="text-lg font-semibold">Restaurant Name</p>
              <p>
                <FontAwesomeIcon icon={faBowlFood}/>  $ 9.99 Delivery Fee
              </p>
            </div>
            <p>
              <FontAwesomeIcon icon={faClock}   className="ml-3"/> 10 - 15 mins
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between md:justify-normal md:-mt-12">
          <img src={res5} alt="" className="mt-8"/>
          <div className="flex flex-row items-center justify-between">
            <div className="p-1 mt-3">
              <p className="text-lg font-semibold">Restaurant Name</p>
              <p>
                <FontAwesomeIcon icon={faBowlFood}/>  $ 9.99 Delivery Fee
              </p>
            </div>
            <p>
              <FontAwesomeIcon icon={faClock}   className="ml-3"/> 10 - 15 mins
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
