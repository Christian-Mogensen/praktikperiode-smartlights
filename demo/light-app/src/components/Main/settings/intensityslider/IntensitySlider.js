import React from 'react';
import Header from '../../Header';
import TurnOffBulb from '../../../../assets/img/icons/intensityslider/Solution.js'
import TurnOnBulb from '../../../../assets/img/icons/intensityslider/Solution2.js'
import IntensityMark from './IntensityMark';
import {motion} from 'framer-motion'
import IntensityMarks from './IntensityMarks';
const IntensitySlider = () => {
  return (<div className='pb-6'>
      <Header value='Intensity slider'/>
      <motion.div  initial={{width:'60%'}}
  animate={{width:'100%'}}
  transition={{duration:0.2, delay:0.2}}
   className='flex items-end'>
        <div><TurnOffBulb /></div>
      <div className="px-2 w-full flex flex-col gap-3">
        <input id='inputslide' className='w-full slider' type="range" min="1" max="100" value='1'step="10"/>
      <IntensityMarks />
      </div>
        <div><TurnOnBulb /></div>

      </motion.div>
      </div>);
};

export default IntensitySlider;
