import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Set triggerOnce to true if you want the animation to occur only once
  });

 
  return (
    <div
      className="md:h-screen border-t border-slate-400 md:border-none pt-20"
      id="project"
      
    >
      <h1 className="text-center text-6xl text-white">Projects</h1>
      <div className="flex flex-col pl-5 text-[12px]  md:text-xl md:grid md:grid-cols-2 gap-4 md:gap-40 md:pl-28 pt-3 md:pt-20">
        <div className="flex flex-col text-white ">
          <p className="text-[14px] md:text-2xl py-1 bg-black text-white w-[80vw] md:w-[30vw] px-2 rounded-md">
            Ecommerce Website created by nextJs
          </p>
          <a href="https://sun-mobile-karur.vercel.app">
            Link:https://sun-mobile-karur.vercel.app{" "}
          </a>
          <p>
            Description:Project was created along with dashboard.Dasboard access
            /admin...
          </p>
          <p>
            Used:Nextjs,Antd,MaterialUI,Firebase phone
            auth,JWT,ChartJs,Texteditor,Tailwindcss,SwiperJs.
          </p>
        </div>
        <div className="flex flex-col text-white ">
          <p className="text-[14px] md:text-2xl py-1 bg-black text-white w-[80vw] md:w-[30vw] px-2 rounded-md">
            Transportation Management created by React with node
          </p>
          <a href="https://transportlink.vercel.app">
            Link:https://transportlink.vercel.app{" "}
          </a>
          <p>
            Description:This project is Dashboard and its purpose for creating
            bill for transportation.
          </p>
          <p>Used:ReactJs,NodeJs,Antd,MaterialUI,Tailwindcss,Jwt.</p>
        </div>
        <div className="flex flex-col text-white ">
          <p className="md:text-2xl py-1 bg-black text-white w-[80vw] md:w-[30vw] px-2 rounded-md">
            Ecommerce Website created by React with node
          </p>
          <a href="https://ecommerce-app-client-uguo.vercel.app">
            Link:https://ecommerce-app-client-uguo.vercel.app{" "}
          </a>
          <p>Description:Curently Working in React with node</p>
          <p>Used:Loading...</p>
        </div>
        <div className="flex flex-col text-white ">
          <p className="md:text-2xl py-1 bg-black text-white w-[80vw] md:w-[30vw] px-2 rounded-md">
            Ecommerce Website created by nextJs
          </p>
          <a href="https://sun-mobile-karur.vercel.app">
            Link:https://sun-mobile-karur.vercel.app{" "}
          </a>
          <p>
            Description:Project was created along with dashboard.Dasboard access
            /admin...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
