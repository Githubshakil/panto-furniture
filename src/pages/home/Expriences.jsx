import React from "react";
import expriencesImg from "../../assets/images/expricences.png";
import ButtonComponent from "../../components/ButtonComponent";

const Expriences = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 ">
      <div className="md:w-1/2 md:h-[541px]">
        <img src={expriencesImg} alt="" className="h-full w-full" />
      </div>
      <div className="md:w-1/2 mx-auto">
        <h3 className="font-poppins uppercase text-lg font-semibold text-primary mb-4">
          experiences
        </h3>
        <h2 className="font-poppins capitalize text-[42px] font-bold lg:w-[512px] text-[#1e1e1e] mb-4 dark:text-white ">we provide you the best experience</h2>
        <p className="font-poppins text-lg text-[#1e1e1e] leading-[185%] md:w-[556px] mb-5 lg:w-2/3 dark:text-white">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
        <ButtonComponent text={"More Info"}/>
      </div>
    </section>
  );
};

export default Expriences;
