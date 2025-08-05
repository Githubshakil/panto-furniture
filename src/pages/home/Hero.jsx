import React, { useContext } from "react";
import bannerImg from "../../assets/images/banner.png";
import { FaSearch } from "react-icons/fa";
import TooltipButton from "../../components/TooltipButton";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";








const Hero = () => {

const {isDarkMode, ToggleTheme} = useContext(ThemeContext)




  return (
    <section
      className="h-screen relative bg-center bg-cover text-white"
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

      {/* bottom blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent"/>

      {/* hover button displaying tooltip box  */}
      
      <div className="hidden lg:block absolute bottom-40 left-24">
        <TooltipButton position="bottom"/>
      </div>
      <div className="hidden lg:block absolute bottom-52 left-96">
        <TooltipButton position="bottom"/>
      </div>
      <div className="hidden lg:block absolute bottom-24 right-[820px]">
        <TooltipButton position="bottom"/>
      </div>
      <div className="hidden lg:block absolute bottom-12 right-16">
        <TooltipButton position="bottom"/>
      </div>


      {/* Dark and light color switer */}

      <div className=" absolute bottom-40 right-20 z-40">
        <button onClick={ToggleTheme} className="focus:outline-none font-bold text-lg p-5 bg-black rounded-full cursor-pointer">
          
          {
            isDarkMode ? <BsSun className="text-yellow-300"/> : <BsMoon className="text-yellow-300"/>
          }
        </button>
      </div>
      
    </section>
  );
};

export default Hero;
