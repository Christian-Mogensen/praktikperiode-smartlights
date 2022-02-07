import { collection, doc, query, setDoc, where } from 'firebase/firestore';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import PowerOff from '../../../assets/img/icons/PowerOff';
import { auth, db } from '../../../firebase/firebase';
import { useColorContext } from '../../../hooks/colorContext';
import ColorOptions from './colors/ColorOptions';
import IntensitySlider from './intensityslider/IntensitySlider';
import SaveComp from './SaveComp';
import SceneContainer from './scenes/SceneContainer';




const SettingWrapper = () => {
  const {colorTheme, alphaValue, scene, setRoomStartWord,setRoomEndWord, setLightHeader} = useColorContext()
const {slug} = useParams()
console.log(slug);

const user = useAuthState(auth)
console.log();

  const createSetting = async(roomslug)=> {
    const userId = user[0].uid


    await setDoc(doc(db, 'users', userId, `rooms/${roomslug}`), {
      color: colorTheme,
      brightness:alphaValue,
      scene: scene
    });
  }
  
  


  return (
  <div
  className='relative'>
    <div className='absolute -right-2 -top-12'><Link to='/' onClick={() => {
        setRoomStartWord("Control");
        setRoomEndWord("panel");
        setLightHeader("");
      }}><PowerOff/></Link>
      </div>
      <div className=' -top-40   absolute'  onClick={()=> createSetting(slug) }><SaveComp /> </div>
      <IntensitySlider />
      <ColorOptions />
      <SceneContainer />
      
  </div>
  );
};

export default SettingWrapper;
