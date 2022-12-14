import { motion } from "framer-motion";
import React from "react";
import AboutImg from '../../assets/home2.png'

const About = () => {
  return (
    <section className="w-full lg:h-[700px] flex items-center 2xl:px-[186px] lg:px-20 px-8 mt-[41px] mb-[50px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:items-center w-full h-full gap-2 overflow-y-hidden">
        {/* left */}
        <div className="flex flex-col gap-7 text-center items-center lg:items-start lg:text-left">
          <h2 className="text-white xl:text-[40px] lg:text-3xl text-2xl font-semibold overflow-y-hidden ">
            Why Choose{" "}
            <span className="block pt-4 overflow-y-hidden">NERDWAREX</span>
          </h2>
          <p className="text-lg text-[#e0e0e0]">
            Nerdwarex is introducing the first of it's kind a crypto payment
            based online learning platform to further improve security, loss of
            funds and many more
          </p>
          <motion.button
            className="px-[23px] py-2 btn-primary rounded-[20px] text-white "
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
        </div>
        {/* right */}
        <div className="md:flex lg:justify-end w-[50%] h-auto lg:w-full mx-auto hidden">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
