import { collection, doc, query, setDoc, where } from 'firebase/firestore';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import DemonstrationLight from '../../../assets/img/icons/lights/DemonstrationLight';
import PowerOff from '../../../assets/img/icons/PowerOff';
import { auth, db } from '../../../firebase/firebase';
import { useColorContext } from '../../../hooks/colorContext';
import ColorOptions from './colors/ColorOptions';
import IntensitySlider from './intensityslider/IntensitySlider';
import SaveComp from './SaveComp';
import SceneContainer from './scenes/SceneContainer';
import {motion} from 'framer-motion'



const SettingWrapper = () => {
  const {colorTheme, stateAlphaVal, scene, setRoomStartWord,setRoomEndWord, setLightHeader} = useColorContext()
const {slug} = useParams()
console.log(slug);

const user = useAuthState(auth)
console.log();

  const createSetting = async(roomslug)=> {
    const userId = user[0].uid


    await setDoc(doc(db, 'users', userId, `rooms/${roomslug}`), {
      color: colorTheme,
      brightness:stateAlphaVal,
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
      <motion.div
          className="fixed -z-30 top-0 left-[210px]"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <DemonstrationLight
            
          />
        </motion.div>
      <IntensitySlider />
      <ColorOptions />
      <SceneContainer />
      
  </div>
  );
};

export default SettingWrapper;
