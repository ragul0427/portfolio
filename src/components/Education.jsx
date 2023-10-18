import React from "react";

function Education() {
  return (
    <div
      className="md:h-screen border-t border-slate-400 md:border-none flex flex-col md:flex-row justify-around items-center"
      id="education"
    >
      <div>
        <img
          src="https://o.remove.bg/downloads/05f5ba33-f680-4612-a1e4-8f25adb01eb8/online-education-concept_52683-8290-removebg-preview.png"
          className="w-[70vw] md:w-[40vw]"
        />
      </div>
      <div className="text-white text-[20px] pl-4">
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
      </div>
    </div>
  );
}

export default Education;
