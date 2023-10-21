import React from "react";
import Edu from "../assets/edu.png"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Education() {
  const [ref, inView] = useInView();
  const animationVariants = {
    visible: { opacity: 1, x: 0, rotateX: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -200, rotateX: 120 },
  };
  const zoomedInVariants = {
    zoomedIn: {
      scale: 1.8, // Increase the scale to zoom in
      opacity: 0,
      y: 200,
    },
    zoomedOut: {
      scale: 1, // Default scale to zoom out
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div
      className="md:h-screen !overflow-x-hidden border-t pt-2 border-slate-400 md:border-none flex flex-col md:flex-row-reverse justify-around items-center"
      id="education"
    >
      <motion.div 
       ref={ref}
       initial="hidden"
       //   this animate all time scroll
       animate={inView ? "visible" : "hidden"}
       //   *******************************
       //   transition={{duration:1}}
       variants={animationVariants}
      >
        <img
          src={Edu}
          className="w-[70vw] md:w-[40vw]"
        />
      </motion.div>
      <motion.div className="text-white text-[20px] pl-4"  initial="zoomedOut"
          animate={inView ? "zoomedOut" : "zoomedIn"}
          exit="zoomedOut"
          variants={zoomedInVariants}
          whileHover="zoomedIn" // Add zoom-in effect on hover
          transition={{ duration: 0.5 }}>
        <h1 className="text-2xl md:text-5xl"> Education</h1>
        <p className="flex flex-col pt-4">
          <span className="bg-gradient-to-r from-black/90 to-blue-900 rounded-md px-2 py-1 md:text-[22px]">
            Certification
          </span>
          <span className="tracking-wider">
            LiweWire Training Institue-Karur
          </span>
          <span className="tracking-wider">Full Stack Mern Development</span>
        </p>
        <p className="flex flex-col pt-4">
          <span className="bg-gradient-to-r from-black/90 to-blue-900 rounded-md px-2 py-1 md:text-[22px]">
            UG Graduation
          </span>
          <span className="tracking-wider">
            Hindustan college of arts and science-coimbatore
          </span>
          <span className="tracking-wider">Bcom-(IT)</span>
          <span className="tracking-wider">65%</span>
        </p>
        <p className="flex flex-col pt-4">
          <span className="bg-gradient-to-r from-black/90 to-blue-900 rounded-md px-2 py-1 md:text-[22px]">
            HSC
          </span>
          <span className="tracking-wider">
            Lords park matriculation higher secondary school-karur
          </span>
          <span className="tracking-wider">63%</span>
        </p>
        <p className="flex flex-col pt-4">
          <span className="bg-gradient-to-r from-black/90 to-blue-900 rounded-md px-2 py-1 md:text-[22px]">
            SSLC
          </span>
          <span className="tracking-wider">
            Lords park matriculation higher secondary school-karur
          </span>
          <span className="tracking-wider">88%</span>
        </p>
      </motion.div>
    </div>
  );
}

export default Education;
