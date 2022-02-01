import React from "react";
import {motion} from 'framer-motion'



const btnItem = {
  hidden: { opacity: 0, x:30 },
  show: { opacity: 1, x:0 }
}
const Button = ({variant, btnImg, btnH, btnS }) => {
  return (
    <motion.div 
    variants={variant}
    className="bg-white cursor-pointer h-[150px] place-self-center rounded-[20px] w-[150px] p-5 btn__dropshadow-blue flex flex-col justify-between">
      <motion.div variants={btnItem}>
        <motion.img variants={btnItem} src={`${btnImg}`} alt="" />
      </motion.div>
      <div>
        <motion.span variants={btnItem} className="block text-lg font-bold">{btnH}</motion.span>
        <motion.span variants={btnItem} className="text-[#FFA939] font-bold text-[13px]">{btnS}</motion.span>
      </div>
    </motion.div>
  );
};

export default Button;
