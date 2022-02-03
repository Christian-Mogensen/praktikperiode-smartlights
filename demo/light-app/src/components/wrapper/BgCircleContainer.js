import React from 'react';
import { motion } from 'framer-motion'
const BgCircleContainer = ({children}) => {
  return       <motion.div
initial={{rotate:360}}
animate={{rotate:0}}
transition={{duration:60, repeat:Infinity, ease:'linear'}}

  >{children}</motion.div>;
};

export default BgCircleContainer;
