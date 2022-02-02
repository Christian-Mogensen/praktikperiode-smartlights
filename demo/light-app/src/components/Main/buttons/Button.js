import React, {useContext} from "react";
import {motion} from 'framer-motion'
import {
  Link
} from 'react-router-dom';
import { ColorContext } from "../../../hooks/colorContext";


const btnItem = {
  hidden: { opacity: 0, x:30 },
  show: { opacity: 1, x:0 }
}
const Button = ({clickRoute, variant, btnImg, btnH, btnS }) => {
  const {colorTheme} = useContext(ColorContext)
  return (
    <Link to={clickRoute}>
    <motion.div 
    variants={variant}
    className="bg-white cursor-pointer h-[150px] place-self-center rounded-[20px] w-[150px] p-5 btn__dropshadow-blue flex flex-col justify-between">
      <motion.div variants={btnItem}>
        <motion.img variants={btnItem} src={`${btnImg}`} alt="" />
      </motion.div>
      <div>
        <motion.span variants={btnItem} className="block text-lg font-bold">{btnH}</motion.span>
        <motion.div variants={btnItem} style={{"color":`${colorTheme}`}}className={`font-bold text-[13px]`}>{btnS}</motion.div>
      </div>
    </motion.div>
      </Link>
  );
};

export default Button;
