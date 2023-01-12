import { HiX } from "react-icons/hi";
import React from "react";
import { motion } from "framer-motion";

const Modal = ({ children, open, handleClose }) => {
  return (
    <motion.div
      animate={{ scale: open ? 1 : 0, opacity: open ? [0, 1] : 0 }}
      className="bg-black text-white fixed top-0 left-0 w-screen h-screen grid place-content-center z-[151]"
    >
      {/* Modal inner */}
      <div className="max-w-screen-xl 2xl:px-[186px] mx-auto lg:px-20 px-8">
        {children}
      </div>

      {/* Close button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="absolute top-5 right-5 h-10 w-10 hover:bg-slate-200 hover:text-black rounded-full transition-all duration-150 ease-out grid place-content-center"
        onClick={handleClose}
      >
        <HiX size={20} />
      </motion.button>
    </motion.div>
  );
};

export default Modal;
