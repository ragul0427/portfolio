import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const Skills = [
    {
      id: 1,
      skill: "HTML",
    },
    {
      id: 2,
      skill: "CSS",
    },
    {
      id: 3,
      skill: "Bootstrap",
    },
    {
      id: 4,
      skill: "Javascript",
    },
    {
      id: 5,
      skill: "ReactJs",
    },
    {
      id: 6,
      skill: "NextJs",
    },
    {
      id: 7,
      skill: "React Native",
    },
    {
      id: 8,
      skill: "Mongodb",
    },
    {
      id: 9,
      skill: "NodeJs",
    },
    {
      id: 10,
      skill: "ExpressJs",
    },
  ];

  const KeySkills = [
    {
      id: 1,
      skill: "Taiwind Css",
    },
    {
      id: 2,
      skill: "Antd Design",
    },
    {
      id: 3,
      skill: "Material UI",
    },
    {
      id: 4,
      skill: "Daisy UI",
    },
    {
      id: 5,
      skill: "Framer-Motion",
    },
    {
      id: 6,
      skill: "Firebase",
    },
    {
      id: 7,
      skill: "NativWind",
    },
    {
      id: 8,
      skill: "Emmets",
    },
    {
      id: 9,
      skill: "Swiper JS",
    },
    {
      id: 10,
      skill: "React Native Paper",
    },
  ];
  const animationVariants = {
    visible: { opacity: 1, x: 0, rotateX: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -200, rotateX: 120 },
  };

  /* this only one time animate on scroll*/

  //   useEffect(() => {
  //     if (inView) {
  //       controls.start('visible');
  //     }
  //   }, [controls, inView]);
  // *******************************

  const zoomedInVariants = {
    zoomedIn: {
      scale: 1.8, // Increase the scale to zoom in
      opacity: 0,
      x: 200,
    },
    zoomedOut: {
      scale: 1, // Default scale to zoom out
      opacity: 1,
      x: 0,
    },
  };

  const zoomedInVariants2 = {
    zoomedIn: {
      scale: 2, // Increase the scale to zoom in
      opacity: 0,
      x: 200,
    },
    zoomedOut: {
      scale: 1, // Default scale to zoom out
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div
      id="skill"
      className=" border-t h-screen pt-7 border-slate-400 md:border-none  md:h-screen !w-[100vw] flex flex-col md:flex-row justify-between md:px-20 items-center"
    >
      <motion.div
        className="w-[70%] md:w-[50%]"
        ref={ref}
        initial="hidden"
        //   this animate all time scroll
        animate={inView ? "visible" : "hidden"}
        //   *******************************
        //   transition={{duration:1}}
        variants={animationVariants}
      >
        <img src="https://neetable.com/img/hire-pages/mern-stack-developer/hire-mern-stack-developer-banner.png" />
      </motion.div>
      <div className="flex flex-row gap-10 md:gap-20 pt-7 md:pt-0 pl-7 md:pl-0">
        <motion.div
          initial="zoomedOut"
          animate={inView ? "zoomedOut" : "zoomedIn"}
          exit="zoomedOut"
          variants={zoomedInVariants}
          whileHover="zoomedIn" // Add zoom-in effect on hover
          transition={{ duration: 0.5 }}
        className="text-lg"
        >
          <h1 className="md:text-6xl text-white">Technical Skills</h1>
          <ul className="md:pl-8">
            {Skills.map((res, i) => {
              return (
                <li key={i} className="list-disc text-white pt-5">
                  {res.skill}
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          initial="zoomedOut"
          animate={inView ? "zoomedOut" : "zoomedIn"}
          exit="zoomedOut"
          variants={zoomedInVariants2}
          whileHover="zoomedIn" // Add zoom-in effect on hover
          transition={{ duration: 1.5 }}
          className="text-lg"
        >
          <h1 className="md:text-6xl text-white">Key Skills</h1>
          <ul className="md:pl-8">
            {KeySkills.map((res, i) => {
              return (
                <li key={i} className="list-disc text-white pt-5">
                  {res.skill}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
