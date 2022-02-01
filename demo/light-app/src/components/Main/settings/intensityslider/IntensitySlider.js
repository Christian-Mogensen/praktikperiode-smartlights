import React from 'react';
import Header from '../../Header';
import TurnOffBulb from '../../../../assets/img/icons/intensityslider/Solution.js'
import TurnOnBulb from '../../../../assets/img/icons/intensityslider/Solution2.js'
import IntensityMark from './IntensityMark';
const IntensitySlider = () => {
  return (<div className='pb-6'>
      <Header value='Intensity slider'/>
      <div className='flex items-end'>
        <div><TurnOffBulb /></div>
      <div className="px-2 w-full flex flex-col gap-3">
        <input id='inputslide' className='w-full slider' type="range" min="1" max="100"/>
      <div className="w-full flex justify-between items-end pr-[6px]">
        <IntensityMark />
        <IntensityMark />
        <IntensityMark />
        <IntensityMark />
        <IntensityMark />
        <IntensityMark />
        </div>
      </div>
        <div><TurnOnBulb /></div>

      </div>
      </div>);
};

export default IntensitySlider;
