import React from "react";
import {motion} from 'framer-motion'


import Button from "./Button";
import bedImg from "../../../assets/img/button/bed.png";
import livingRoomImg from "../../../assets/img/button/room.png";
import kitchenImg from "../../../assets/img/button/kitchen.png";
import bathroomImg from "../../../assets/img/button/bathtube.png";
import houseImg from "../../../assets/img/button/house.png";
import balchonyImg from "../../../assets/img/button/balcony.png";
import Header from "../Header";


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
            name={btn.name}
            place={btn.place}
            light={btn.light}
            clickRoute={btn.path}
            variant={item}
          />
        ))}
      </motion.div>
    </>
  );
};

export default ButtonMenu;
