import { motion } from "framer-motion";
import React from "react";


const Topics = () => {
  return (
    <section className="2xl:px-[186px] lg:px-20 px-8 mt-24 ">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-white lg:text-[40px] md:text-3xl text-2xl font-semibold overflow-y-hidden">
          Popular Topics
        </h3>
        <div className="flex items-center gap-[80px]">
          <motion.button
            className="text-white w-[58px] h-[58px] rounded-[20px] bg-[#3551a0] grid place-items-center"
            whileTap={{ scale: 0.9 }}
          >
            <i class="ri-arrow-left-line"></i>
          </motion.button>
          <motion.button
            className="text-white w-[58px] h-[58px] rounded-[20px] bg-[#3551a0] grid place-items-center"
            whileTap={{ scale: 0.9 }}
          >
            <i class="ri-arrow-right-line"></i>
          </motion.button>
        </div>
      </div>
      
    </section>
  );
};

export default Topics;
