import React from 'react';
import {motion} from 'framer-motion'
const ColorCircle = ({clr, val, fm}) => {

console.log(fm);
  return <motion.div
  initial={{x:fm}}
  animate={{x:0}}
  transition={{duration:0.7, delay:1}}
  className={`${clr} cursor-pointer min-h-7 min-w-7 w-7 h-7 rounded-full grid place-content-center font-bold`}>{val}</motion.div>;
};

export default ColorCircle;
