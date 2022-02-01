import React from "react";
import Button from "./Button";
import bedImg from "../../../assets/img/button/bed.png";
import livingRoomImg from "../../../assets/img/button/room.png";
import kitchenImg from "../../../assets/img/button/kitchen.png";
import bathroomImg from "../../../assets/img/button/bathtube.png";
import houseImg from "../../../assets/img/button/house.png";
import balchonyImg from "../../../assets/img/button/balcony.png";
import Header from "../Header";

import {motion} from 'framer-motion'

const ButtonMenu = () => {
  const buttonContent = [
    {
      name: "Bed room",
      light: "4 Lights",
      src: bedImg,
      path:"/LightSetting"
    },
    {
      name: "Living room",
      light: "2 Lights",
      src: livingRoomImg,
      path:"/LightSetting"
    },
    {
      name: "Kitchen",
      light: "5 Lights",
      src: kitchenImg,
      path:"/LightSetting"
    },
    {
      name: "Bathroom",
      light: "1 Light",
      src: bathroomImg,
      path:"/LightSetting"
    },
    {
      name: "Outdoor",
      light: "5 Lights",
      src: houseImg,
      path:"/LightSetting"
    },
    {
      name: "Balcony",
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
  return (
    <>
      <Header value={"All rooms"} />
      <motion.div variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-5">
        {buttonContent.map((btn, index) => (
          <Button
            key={`uni-${index}`}
            btnImg={btn.src}
            btnH={btn.name}
            btnS={btn.light}
            clickRoute={btn.path}
            variant={item}
          />
        ))}
      </motion.div>
    </>
  );
};

export default ButtonMenu;
