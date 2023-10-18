import { motion } from "framer-motion";
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "antd";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <div className="w-screen">
      <motion.div
        className="w-[100%] h-[60px] flex py-2 border-b pb-2 border-blue-200 text-white items-center justify-between pl-5  md:!px-40"
        initial={{ opacity: 0, translateY: "-80px" }}
        animate={{ opacity: 1, translateY: "0px" }}
        transition={{ type: "spring", delay: 0.3, stiffness: "200" }}
      >
        <div className="shadow-inner cursor-pointer shadow-white w-[30px] flex items-center justify-center rounded-full h-[30px] text-[14px]">
          R
        </div>
        <div className="hidden md:flex gap-20">
          <p className="cursor-pointer">Profile</p>
          <Link to="skill" className="cursor-pointer">Skills</Link>
          <p className="cursor-pointer">education</p>
          <p className="cursor-pointer">contact</p>
          <p className="cursor-pointer">About</p>
        </div>
        {/* <button className="shadow-inner text-sm shadow-white w-[80px] h-[30px] flex items-center justify-center">
          Login
        </button> */}
        <div className="md:hidden pr-6" onClick={()=>{setOpen(!open)}}>
          <MenuIcon/>
        </div>
      </motion.div>

       <Drawer open={open} width={200} closable={false} onClose={()=>{setOpen(!open)}} className="!h-[55vh] !bg-blue-900 text-white">
        <div className="float-right mt-[-10px]" onClick={()=>{setOpen(!open)}}><CloseIcon/></div>
       <div className="flex flex-col md:hidden gap-8 pt-5">
          <p className="cursor-pointer border-b pb-2">Profile</p>
          <Link to="skill" className="cursor-pointer border-b pb-2" onClick={()=>{setOpen(!open)}}>Skills</Link>
          <p className="cursor-pointer border-b pb-2">education</p>
          <p className="cursor-pointer border-b pb-2">contact</p>
          <p className="cursor-pointer border-b pb-2">About</p>
        </div>
       </Drawer>
    </div>
  );
}

export default Navbar;
