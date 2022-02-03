import React, {useContext} from 'react';
import {ColorContext} from '../../../hooks/colorContext'
import {Link} from 'react-router-dom'
import PowerOff from '../../../assets/img/icons/PowerOff';
import ColorOptions from './colors/ColorOptions';
import IntensitySlider from './intensityslider/IntensitySlider';
import SceneContainer from './scenes/SceneContainer';
const SettingWrapper = () => {
  const {setRoomStartWord,setRoomEndWord, setLightHeader} = useContext(ColorContext)
  return (
  <div
  className='relative'>
    <div className='absolute -right-2 -top-12'><Link to='/'      onClick={() => {
        setRoomStartWord("Control");
        setRoomEndWord("panel");
        setLightHeader("");
      }}><PowerOff/></Link></div>
      <IntensitySlider />
      <ColorOptions />
      <SceneContainer />
  </div>
  );
};

export default SettingWrapper;
