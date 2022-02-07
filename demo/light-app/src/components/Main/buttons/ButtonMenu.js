import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import balchonyImg from "../../../assets/img/button/balcony.png";
import bathroomImg from "../../../assets/img/button/bathtube.png";
import bedImg from "../../../assets/img/button/bed.png";
import houseImg from "../../../assets/img/button/house.png";
import kitchenImg from "../../../assets/img/button/kitchen.png";
import livingRoomImg from "../../../assets/img/button/room.png";
import LoginCloseIcon from "../../../assets/img/icons/LoginCloseIcon";
import LoginIcon from "../../../assets/img/icons/LoginIcon";
import LogOutIcon from "../../../assets/img/icons/LogOutIcon";
import { auth, logout } from "../../../firebase/firebase";
import { ColorContext } from "../../../hooks/colorContext";
import Formular from "../form/Formular";
import Header from "../Header";
import Button from "./Button";
import { getStorage, getDownloadURL, ref } from "firebase/storage";


const ButtonMenu = () => {
  // const storage = getStorage()
  
  
  // const [imageUrl, setImageUrl] = useState('')
  
  // useEffect(()=>{
  //   (async()=>{
  //     const imageRef = ref(storage, 'images/bed.png')
  //     const image_Url = await getDownloadURL(imageRef)
  //     setImageUrl(image_Url)
  //   })()
  // },[storage])


  const buttonContent = [
    {
      name: "bed",
      place: " room",
      light: "4 Lights",
      src: bedImg,
      path: "/LightSetting",
    },
    {
      name: "living",
      place: " room",
      light: "2 Lights",
      src: livingRoomImg,
      path: "/LightSetting",
    },
    {
      name: "kitchen",
      place: "",
      light: "5 Lights",
      src: kitchenImg,
      path: "/LightSetting",
    },
    {
      name: "bathroom",
      place: "",
      light: "1 Light",
      src: bathroomImg,
      path: "/LightSetting",
    },
    {
      name: "outdoor",
      place: "",
      light: "5 Lights",
      src: houseImg,
      path: "/LightSetting",
    },
    {
      name: "balcony",
      place: "",
      light: "2 Lights",
      src: balchonyImg,
      path: "/LightSetting",
    },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const [formBtn, setFormBtn] = useState(false);
  const { login, setLogin, value, setValue, createAcc } =
    useContext(ColorContext);

  const stateChanger = () => {
    setFormBtn(!formBtn);
    setLogin(!value);
  };
  const [user] = useAuthState(auth)

  // if(user === null) return setFormBtn(!formBtn)
  
  return (
    <>
      <Header
        value={!formBtn ? "All rooms" : createAcc ? "Login" : "Sign up"}
      />
        {!user&&<div className="absolute -top-4 right-5">
          <div
            onClick={() => stateChanger()}
            className="white profil__img-dropshadow bg-white overflow-hidden cursor-pointer  p-2 h-12 w-12 rounded-full"
          >
            {!formBtn ? <LoginIcon /> : <LoginCloseIcon />}
          </div>
        </div>}
        
        {user&&<div className="absolute -top-4 left-24">
          <div
            onClick={logout}
            className="white profil__img-dropshadow bg-white overflow-hidden cursor-pointer  p-2 h-12 w-12 rounded-full"
          >
            <LogOutIcon />
          </div>
        </div>}
      
      {!user&&
      formBtn ? (
        <Formular />
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-5"
        >
          {buttonContent.map((btn) => (
            <Button
              key={btn.name}
              id={btn.name}
              btnImg={btn.src}
              name={btn.name}
              place={btn.place}
              light={btn.light}
              clickRoute={btn.path}
              variant={item}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default ButtonMenu;
