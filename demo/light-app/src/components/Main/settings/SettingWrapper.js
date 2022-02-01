import React from 'react';
import PowerOff from '../../../assets/img/icons/PowerOff';
import ColorOptions from './colors/ColorOptions';
import IntensitySlider from './intensityslider/IntensitySlider';
import SceneContainer from './scenes/SceneContainer';

const SettingWrapper = () => {
  return (
  <div className='relative'>
    <div className='absolute -right-2 -top-12'><PowerOff/></div>
      <IntensitySlider />
      <ColorOptions />
      <SceneContainer />
  </div>
  );
};

export default SettingWrapper;
