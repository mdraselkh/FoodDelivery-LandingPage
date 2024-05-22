import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-full mt-10 ">
      <div className="flex flex-row items-center justify-between px-10 md:px-24">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-secondary md:text-3xl">
            FoodDelivery
          </h3>
        </div>
        <div className="flex flex-col items-end justify-end my-8 md:flex-row md:pr-10 ">
          <a href="#" className="text-lg font-semibold md:pl-4"><p>Partners</p></a>
          <a href="#" className="text-lg font-semibold md:pl-4"><p>About Us</p></a>
          <a href="#" className="text-lg font-semibold md:pl-4"><p>Privacy Policy</p></a>
          <a href="#" className="text-lg font-semibold md:pl-4"><p>Contact Us</p></a>
        </div>
      </div>
      <div className="grid grid-cols-2 px-10 bg-gray-200 justfy-between md:px-24 md:py-10">
         <div className="mt-8">
             <p>123 Lorem Ipsum Street<br />
              Tangerang, Banten<br />
              +10 - 234 - 5678</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
         
         <ul className="mt-8 md:ml-10">
              <li className="text-gray-600">All Restaurant</li>
              <li className="text-gray-600">Best Sellers</li>
              <li className="text-gray-600">Top Rated</li>
              <li className="text-gray-600">Newcomers</li>
            </ul>
            <ul className="mt-8 md:ml-10">
              <li className="text-gray-600">FAQ</li>
              <li className="text-gray-600">Join our program</li>
              <li className="text-gray-600">Be our partners</li>
              <li className="text-gray-600">Terms & Condition</li>
          </ul>
          <ul className="mt-8 mb-8 md:ml-10 md:mb-10">
            <li className="text-gray-600">Our Parent Company</li>
              <li className="text-gray-600">Make an investment</li>
          </ul>
         
         </div>
         
         
      </div>
    </div>
  );
};

export default Footer;
