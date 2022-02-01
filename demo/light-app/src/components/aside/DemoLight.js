import React from 'react';
import DemonstrationLight from '../../assets/img/icons/lights/DemonstrationLight';
import {motion} from 'framer-motion'
const DemoLight = () => {
  return <motion.div 
  initial={{y:'-20%'}}
  animate={{y:0}}
  transition={{duration:0.5, delay:0.7}}
  className='absolute right-2'><DemonstrationLight /></motion.div>;
};

export default DemoLight;
