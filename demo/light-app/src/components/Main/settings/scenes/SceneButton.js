import React from 'react';
import SceneBulb from '../../../../assets/img/icons/scenesection/SceneBulb';
import {motion} from 'framer-motion'
const SceneButton = ({fmiv,clr,val}) => {
  return <motion.div 
  initial={{x:fmiv}}
  animate={{x:0}}
  transition={{duration:0.7, delay:1}}
  className={`h-14 ${clr} cursor-pointer rounded-[10px] text-white grid button-column gap-3 items-center`}> <div className="w-full h-full flex justify-end items-center "><SceneBulb /></div><span>{val}</span></motion.div>;
};

export default SceneButton;
