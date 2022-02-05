import React, {useContext, useState} from "react";
import {motion} from 'framer-motion'


import Button from "./Button";
import bedImg from "../../../assets/img/button/bed.png";
import livingRoomImg from "../../../assets/img/button/room.png";
import kitchenImg from "../../../assets/img/button/kitchen.png";
import bathroomImg from "../../../assets/img/button/bathtube.png";
import houseImg from "../../../assets/img/button/house.png";
import balchonyImg from "../../../assets/img/button/balcony.png";
import Header from "../Header";
import LoginIcon from "../../../assets/img/icons/LoginIcon";
import LoginCloseIcon from "../../../assets/img/icons/LoginCloseIcon";
import Formular from "../form/Formular";
import { ColorContext } from "../../../hooks/colorContext";


const ButtonMenu = () => {
  const buttonContent = [
    {
      name: "Bed",
      place: " room",
      light: "4 Lights",
      src: bedImg,
      path:"/LightSetting"
    },
    {
      name: "Living",
      place: " room",
      light: "2 Lights",
      src: livingRoomImg,
      path:"/LightSetting"
    },
    {
      name: "Kitchen",
      place: "",
      light: "5 Lights",
      src: kitchenImg,
      path:"/LightSetting"
    },
    {
      name: "Bathroom",
      place: "",
      light: "1 Light",
      src: bathroomImg,
      path:"/LightSetting"
    },
    {
      name: "Outdoor",
      place: "",
      light: "5 Lights",
      src: houseImg,
      path:"/LightSetting"
    },
    {
      name: "Balcony",
      place: "",
      light: "2 Lights",
      src: balchonyImg,
      path:"/LightSetting"
    },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  const [formBtn,setFormBtn]=useState(false)
const {login, setLogin, value, setValue,createAcc} = useContext(ColorContext)

const stateChanger = () => {
  setFormBtn(!formBtn) 
  setLogin(!value)
}
    return (
    <>
      <Header value={!formBtn?'All rooms':createAcc?'Login':'Sign up'} />
      {<div className="absolute -top-4 right-5">
        <div onClick={()=>stateChanger()} className="white profil__img-dropshadow bg-white overflow-hidden cursor-pointer  p-2 h-12 w-12 rounded-full">{!formBtn?<LoginIcon/>:<LoginCloseIcon/>}</div>
        </div>}
        {formBtn?<Formular /> :
        
      <motion.div variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-5">
        {buttonContent.map((btn, index) => (
          <Button
            key={`uni-${index}`}
            btnImg={btn.src}
            name={btn.name}
            place={btn.place}
            light={btn.light}
            clickRoute={btn.path}
            variant={item}
          />
        ))}
      </motion.div>}
    </>
  );
};

export default ButtonMenu;
