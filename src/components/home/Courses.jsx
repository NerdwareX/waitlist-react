import { motion } from "framer-motion";
import React, { useState } from "react";
import { courseCategories, courses } from "../../data";
import Course from "../Course";


const Courses = () => {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <section className="mt-[93px] 2xl:px-[186px] lg:px-20 px-8">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-white lg:text-[40px] md:text-3xl text-2xl font-semibold overflow-y-hidden">
          Exclusive courses
        </h3>
        <div className="lg:flex items-center gap-5 hidden">
          <motion.button
            className="w-6 h-6 bg-[#3551a0] text-white grid place-items-center rounded-[20px]"
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-arrow-left-line"></i>
          </motion.button>

          <div className="flex items-center gap-5 ">
            {courseCategories.map((item, index) => {
              return (
                <small
                  key={index}
                  className={`text-[#b3b3b3] cursor-pointer ${
                    selected === index
                      ? "text-white border-b border-b-[#15add9]"
                      : ""
                  }`}
                  onClick={() => {
                    setSelected(index);
                    setActive(!active);
                  }}
                >
                  {item.category}
                </small>
              );
            })}
          </div>

          <motion.button
            className="w-6 h-6 bg-[#3551a0] text-white grid place-items-center rounded-[20px]"
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-arrow-right-line"></i>
          </motion.button>
        </div>
      </div>
      <div className="mt-[92px] mb-[60px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[15px]">
        {courses.map((course, idx) => {
          return <Course course={course} key={idx} />;
        })}
      </div>

      <div className="flex items-center justify-center ">
        <motion.button
          className="px-[23px] py-2 btn-primary rounded-[20px] text-white"
          whileTap={{ scale: 0.9 }}
        >
          View All
        </motion.button>
      </div>
    </section>
  );
};

export default Courses;
