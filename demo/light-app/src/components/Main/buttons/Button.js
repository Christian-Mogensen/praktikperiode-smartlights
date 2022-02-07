import React, {useContext} from "react";
import {motion} from 'framer-motion';

import {
  Link, useParams
} from 'react-router-dom';
import { ColorContext } from "../../../hooks/colorContext";


const btnItem = {
  hidden: { opacity: 0, x:30 },
  show: { opacity: 1, x:0 }
}
const Button = ({clickRoute, id, variant, btnImg, name, place, light }) => {
  
  
  
  const {colorTheme, setRoomStartWord, setRoomEndWord, setLightHeader} = useContext(ColorContext)
  
  
  
  return (
    <Link to={`/${name}`} onClick={()=>{
      setRoomStartWord(name)
      setRoomEndWord(place)
      setLightHeader(light)
    }}>
    <motion.div 
    id={id}
    variants={variant}
    className="bg-white cursor-pointer h-[150px] place-self-center rounded-[20px] w-[150px] p-5 btn__dropshadow-blue flex flex-col justify-between">
      <motion.div variants={btnItem}>
        <motion.img variants={btnItem} src={`${btnImg}`} alt={`${name}${name} icon`} />
      </motion.div>
      <div className="w-full ">
        <motion.div variants={btnItem} className="w-full text-lg font-bold flex gap-1 capitalize"><div>{name}</div><div>{place}</div></motion.div>
        <motion.div variants={btnItem} style={{"color":`${colorTheme}`}}className={`font-bold text-[13px]`}>{light}</motion.div>
      </div>
    </motion.div>
      </Link>
  );
};

export default Button;
