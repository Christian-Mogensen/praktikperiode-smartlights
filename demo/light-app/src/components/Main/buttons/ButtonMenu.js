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
  const [user] = useAuthState(auth);

  // if(user === null) return setFormBtn(!formBtn)

  return (
    <>
      <Header
        value={!formBtn ? "All rooms" : createAcc ? "Login" : "Sign up"}
      />
      <motion.div className="absolute h-[600px] overflow-auto text-right -top-3 right-16">
        <p className="px-1 rounded-md shadow-md bg-gray-50">
          {!formBtn && !user ? "log in" : user ? "log out" : "close"}
        </p>
      </motion.div>
      {!user && (
        <div className="absolute -top-4 right-5">
          <div
            onClick={() => stateChanger()}
            className="w-8 h-8 p-1 overflow-hidden bg-white rounded-full cursor-pointer white profil__img-dropshadow"
          >
            {!formBtn ? <LoginIcon /> : <LoginCloseIcon />}
          </div>
        </div>
      )}

      {user && (
        <div className="absolute -top-4 right-5">
          <div
            onClick={logout}
            className="w-8 h-8 p-1 overflow-hidden bg-white rounded-full cursor-pointer white profil__img-dropshadow"
          >
            <LogOutIcon />
          </div>
        </div>
      )}

      {!user && formBtn ? (
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
