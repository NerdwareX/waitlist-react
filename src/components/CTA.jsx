import React, { useEffect, useRef, useState } from "react";

import LearnVideo from "../assets/learn-more.mp4";
import Modal from "./Modal";
import { motion } from "framer-motion";
import playIcon from "../assets/play-icon.svg";

const CTA = () => {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!showModal) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [showModal]);

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
        <video
          ref={videoRef}
          src={LearnVideo}
          autoPlay
          muted
          controls
          className="h-screen w-screen object-cover"
        ></video>
      </Modal>
    </>
  );
};

export default CTA;
