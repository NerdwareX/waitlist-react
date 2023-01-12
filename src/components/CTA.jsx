import React, { useState } from "react";

import Modal from "./Modal";
import { motion } from "framer-motion";
import playIcon from "../assets/play-icon.svg";

const CTA = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex md:flex-row md:items-center md:gap-10 flex-col gap-6">
        <motion.button
          className="px-[23px] py-2 btn-primary rounded-[20px] text-white text-lg tracking-wider"
          whileTap={{ scale: 0.9 }}
        >
          Join Waitlist
        </motion.button>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <motion.img
            src={playIcon}
            alt="play icon"
            whileHover={{ scale: 0.9 }}
          />
          <span className="text-[#Fea303] font-medium">Learn More</span>
        </div>
      </div>

      <Modal open={showModal} handleClose={() => setShowModal(false)}>
        <div className="bg-white p-5 h-56 text-black rounded-md">
          {/* Todo: Add learn more video */}
          Learn more video to be placed here
        </div>
      </Modal>
    </>
  );
};

export default CTA;
