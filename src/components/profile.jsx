import React from "react";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Skills from "./skills";
import { useInView } from "react-intersection-observer";

function Profiles() {
  const [ref, inView] = useInView();

  const animatedVariants = {
    visible: { translateY: 0, transition: { type: "spring",duration:1,delay:0.2 } },
    hidden: { translateY: -200 },
  };

  // initial={{ direction: "right", rotate: -120, translateX: "250px" }}
  // animate={{ rotate: 0, translateX: "0" }}
  // transition={{ type: "spring", delay: 0.2 }}
  // translate="yes"

  const imageAnimated = {
    visible: {
      rotate: 0,
      translateX: 0,
      transition: { type: "spring", delay: 0.2 },
    },
    hidden: { translateX: 250, rotate: -120 },
  };
  return (
    <div>
      <div className="h-screen pt-7 md:pt-0 flex flex-col md:flex-row justify-around items-center">
        <motion.div
          className="text-3xl md:text-5xl flex flex-col gap-5 md:gap-10 pl-14 text-white w-[100%] md:w-[50%]"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animatedVariants}
        >
          <p>
            <span className="md:text-8xl text-6xl">H</span>ello,
            <TypeAnimation
              sequence={["I am a Full Stack Developer"]}
              // cursor={false}
              wrapper="span"
              speed={30}
              repeat={3}
              deletionSpeed={20}
            />
          </p>
          <p>
            <span className="md:text-8xl text-6xl">M</span>r &nbsp;
            <span className="md:text-8xl text-6xl">R</span>agul
          </p>
          <div className="flex gap-4 md:gap-20">
            <button className="border border-blue-300 h-[28px] md:h-[60px] flex items-center justify-center text-[15px] md:!text-[20px] w-[100px] md:w-[250px]">
              More about me
            </button>
            <button className="border border-blue-300 h-[28px] md:h-[60px] flex items-center justify-center text-[15px] md:!text-[20px] w-[80px] md:w-[200px]">
              Hire me
            </button>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageAnimated}
          className="pt-4 md:pt-0"
        >
          <img
            src={Profile}
            className="rounded-full h-[40vh] md:h-[70vh] shadow border border-blue-400"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Profiles;
