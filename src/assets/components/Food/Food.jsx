import React from "react";

const Food = () => {
  return (
    <div className="w-full h-[450px] my-16 px-10 md:my-20 md:px-28 md:h-[350px]">
      <div className="w-full h-full px-16 rounded-3xl bg-primary">
        <h1 className="py-10 text-3xl font-bold text-white md:text-start md:pr-[520px] md:text-4xl md:py-14 ">
          Food Delivery helps you bring food to your front door
        </h1>
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row md:justify-start">
          <button className="px-8 py-3 mt-8 font-semibold text-white transition-all bg-gray-800 cursor-pointer hover:bg-primary rounded-s-full rounded-e-full md:mt-8 whitespace-nowrap">
            Download Our App
          </button>
          <button className="mt-5 text-xl text-white cursor-pointer md:mt-10 md:ml-10">Browse Food</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
