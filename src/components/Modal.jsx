import { HiX } from "react-icons/hi";
import MaxWidthContainer from "./MaxWidthContainer";
import React from "react";
import { motion } from "framer-motion";

const Modal = ({ children, open, handleClose }) => {
  return (
    <motion.div
      animate={{ scale: open ? 1 : 0, opacity: open ? [0, 1] : 0 }}
      className="bg-[#D5D5D5] fixed top-0 left-0 w-screen min-h-screen overflow-scroll z-[151]"
    >
      {/* Modal inner */}
      <MaxWidthContainer>{children}</MaxWidthContainer>

      {/* Close button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2, transition: { ease: "easeOut" } }}
        className="fixed top-5 left-5 h-[48px] w-[48px] hover:bg-[rgba(0,0,0,0.2)] hover:text-white transition-all duration-150 ease-out rounded-full grid place-content-center z-[152]"
        onClick={handleClose}
      >
        <HiX size={30} />
      </motion.button>
    </motion.div>
  );
};

export default Modal;
