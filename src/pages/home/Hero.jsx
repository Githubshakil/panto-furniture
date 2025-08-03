import React from "react";
import bannerImg from "../../assets/images/banner.png";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="md:pt-44 pt-24 text-center space-y-6 md:w-1/2 mx-auto px-2">
        <h1 className=" font-poppins font-medium lg:text-[64px] text-4xl  lg:leading-[130%] leading-snug traking-[-0.64px] capitalize ">Make your interior more minimalistic & modern</h1>
        <p className="font-poppins text-2xl font-normal lg:w-1/2 mx-auto">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

        {/* search fild */}
        <div className=" relative inline-block z-30">
          <input type="text" placeholder="Search Furniture" className="w-full md:w-80 px-6 py-3 placeholder:text-white bg-white/25 rounded-full border border-gray-300 focus:outline-none" />
          <div className=" absolute right-3 top-1/2 transform -translate-y-1/2 p-3 bg-primary rounded-full cursor-pointer hover:bg-primary/80 transition duration-300">
            <FaSearch/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
