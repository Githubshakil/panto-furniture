import React from 'react'
import material1 from "../../assets/images/material1.png";
import material2 from "../../assets/images/material2.png";
import material3 from "../../assets/images/material3.png";
import ButtonComponent from "../../components/ButtonComponent";

const Materials = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 ">
     
      <div className="md:w-1/2 mx-auto">
        <h3 className="font-poppins uppercase text-lg font-semibold text-primary mb-4">
          Materials
        </h3>
        <h2 className="font-poppins capitalize text-[42px] font-bold lg:w-[476px] text-[#1e1e1e] mb-4 ">Very serious materials for making furniture</h2>
        <p className="font-poppins text-lg text-[#1e1e1e] leading-[185%] md:w-[556px] mb-5 lg:w-[556px]">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
        <ButtonComponent text={"More Info"}/>
      </div>
       <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center ">
        <div>
            <img src={material1} alt="" />
            <img src={material2} alt="" />
        </div>
        <div className='md:col-span-2 col-span-1'>
            <img src={material3} alt="" className=' w-full md:h-[541px]' />
        </div>
      </div>
    </section>
  )
}

export default Materials