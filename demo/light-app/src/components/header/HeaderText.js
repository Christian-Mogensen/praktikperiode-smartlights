import React from 'react';
import {motion}from 'framer-motion'
const HeaderText = ({val,icon,light,scdword, state}) => {
  return (<div className='cursor-pointer '> 
    <h1 className={`text-3xl font-bold ${state?'text-left':'text-right'}  text-white `}><span className='flex items-center gap-3'>{icon} {val}</span> <span className='block'>{scdword}</span> </h1>
    <motion.h2 
    initial={{opacity:0, y:-50}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5, delay:0.7}}
    className='text-lg font-bold text-orange-400'>{light}</motion.h2>
    </div>);
};

export default HeaderText;
