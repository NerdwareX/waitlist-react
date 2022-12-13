import React, { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [active, setActive] = useState(0)

  const showAllLinks = () => setShowLinks(!showLinks);

  return (
    <>
      {/* desktop */}
      <header className="w-full py-[41px] flex items-center fixed top-0 2xl:px-[186px] lg:px-20 px-8 bg-[#000074] z-[150]">
        <nav className="w-full h-full flex items-center justify-between">
          {/* left */}
          <div className="flex items-center sm:gap-1 gap-0">
            <img src={logo} alt="company logo" />
            <h1 className="font-Inter text-white text-base sm:text-2xl font-semibold">
              NERDWAREX
            </h1>
          </div>
          {/* right */}
          <ul className="xl:flex items-center gap-4 hidden">
            <li
              className={`text-white cursor-pointer ${
                active === 0
                  ? "border-b-2 rounded-md border-b-[#15add9] duration-300"
                  : ""
              }`}
              onClick={() => setActive(0)}
            >
              Courses
            </li>
            <li className="text-white relative  w-[345px] h-[36px] border border-[#15add9] rounded-[20px] ">
              <div className="absolute top-1 left-2">
                <i className="ri-search-line text-[#7171aa]"></i>
              </div>
              <input
                type="text"
                placeholder="Search courses"
                className="w-full h-full bg-transparent pl-9 placeholder:text-xs text-white text-sm caret-[#15add9] outline-none focus:border-2 border-[#15add9] duration-300"
              />
            </li>
            <li
              className={`text-white cursor-pointer ${
                active === 1
                  ? "border-b-2 rounded-md border-b-[#15add9] duration-300"
                  : ""
              }`}
              onClick={() => setActive(1)}
            >
              Teacher
            </li>
            <li
              className={`text-white cursor-pointer ${
                active === 2
                  ? "border-b-2 rounded-md border-b-[#15add9] duration-300"
                  : ""
              }`}
              onClick={() => setActive(2)}
            >
              Contact
            </li>
            <motion.li
              className="text-[#15add9] text-lg"
              whileTap={{ scale: 0.9 }}
            >
              <i className="ri-shopping-cart-line"></i>
            </motion.li>
          </ul>
          <div className="flex items-center gap-4 ">
            <motion.button
              className="px-[23px] py-2 btn-primary rounded-[20px] text-white hidden md:flex"
              whileTap={{ scale: 0.9 }}
            >
              Connect wallet
            </motion.button>
            <motion.div
              className="text-white text-lg cursor-pointer xl:hidden"
              onClick={showAllLinks}
              whileTap={{ scale: 0.9 }}
            >
              <i className="ri-menu-fill"></i>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* mobile and tablet */}
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 h-screen w-full z-[200] opacity-100 duration-300 ease-in bg-[rgba(0,0,0,0.3)] xl:hidden ${
          showLinks
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div className="w-full h-screen bg-[#000074] max-w-xs absolute top-0 right-0 xl:hidden">
          <ul className=" w-full h-full flex items-center justify-center gap-6 flex-col">
            <li
              className={`text-white cursor-pointer ${
                active === 0
                  ? "border-b-2 rounded-md border-b-[#15add9] duration-300"
                  : ""
              }`}
              onClick={() => setActive(0)}
            >
              Courses
            </li>
            <li className="text-white relative w-[200px] sm:w-[280px] h-[36px] border border-[#15add9] rounded-[20px] ">
              <div className="absolute top-1 left-2">
                <i className="ri-search-line text-[#7171aa]"></i>
              </div>
              <input
                type="text"
                placeholder="Search courses"
                className="w-full h-full bg-transparent pl-9 placeholder:text-xs text-white text-sm caret-[#15add9] outline-none focus:border-2 border-[#15add9] duration-300"
              />
            </li>
            <li
              className={`text-white cursor-pointer ${
                active === 1
                  ? "border-b-2 rounded-md border-b-[#15add9] duration-300"
                  : ""
              }`}
              onClick={() => setActive(1)}
            >
              Teacher
            </li>
            <li
              className={`text-white cursor-pointer ${
                active === 2
                  ? "border-b-2 rounded-md border-b-[#15add9] duration-300"
                  : ""
              }`}
              onClick={() => setActive(2)}
            >
              Contact
            </li>
            <li className="text-[#15add9] text-lg">
              <i className="ri-shopping-cart-line"></i>
            </li>
            <motion.li className="flex md:hidden" whileTap={{ scale: 0.9 }}>
              <button className="px-[23px] py-2 btn-primary rounded-[20px] text-white">
                Connect wallet
              </button>
            </motion.li>
          </ul>
        </div>
        <motion.div
          className="absolute top-6 right-6 cursor-pointer text-2xl text-white"
          onClick={showAllLinks}
          whileTap={{ rotate: 360 }}
        >
          <i className="ri-close-fill"></i>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
