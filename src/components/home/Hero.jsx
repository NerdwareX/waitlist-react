import React from "react";
import heroImg from '../../assets/home1.png'
import CTA from "../CTA";


const Hero = () => {
  return (
    <section className="w-full lg:h-[700px]  pt-40 flex items-center 2xl:px-[186px] lg:px-20 px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:items-center w-full h-full gap-2 overflow-y-hidden">
        {/* left */}
        <div className="flex flex-col gap-5 text-center items-center lg:items-start lg:text-left">
          <div className="flex flex-col gap-6 ">
            <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold overflow-y-hidden">
              A New Way to Learn
            </h2>
            <h2 className="text-white xl:text-5xl lg:text-3xl text-2xl font-semibold overflow-y-hidden">
              And Upgrade Your Skill
            </h2>
          </div>
          <p className="text-lg text-[#e0e0e0]">
            A solution for easy, secure and flexible way to learn online
            anywhere, anytime, anyplace.
          </p>
          <CTA />
        </div>
        {/* right */}
        <div className="md:flex lg:justify-end w-[50%] h-auto lg:w-full mx-auto hidden">
          <img src={heroImg} alt=""  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
