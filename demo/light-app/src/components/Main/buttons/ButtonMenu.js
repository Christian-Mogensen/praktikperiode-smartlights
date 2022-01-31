import React from "react";
import Button from "./Button";
import bedImg from '../../../assets/img/button/bed.png'
import livingRoomImg from '../../../assets/img/button/room.png'
import kitchenImg from '../../../assets/img/button/kitchen.png'
import bathroomImg from '../../../assets/img/button/bathtube.png'
import houseImg from '../../../assets/img/button/house.png'
import balchonyImg from '../../../assets/img/button/balcony.png'

const ButtonMenu = () => {
  const buttonContent = [
    {
      name: "Bed room",
      light: "4 Lights",
      src: bedImg,
    },
    {
      name: "Living room",
      light: "2 Lights",
      src: livingRoomImg,
    },
    {
      name: "Kitchen",
      light: "5 Lights",
      src: kitchenImg,
    },
    {
      name: "Bathroom",
      light: "1 Light",
      src: bathroomImg,
    },
    {
      name: "Outdoor",
      light: "5 Lights",
      src: houseImg,
    },
    {
      name: "Balcony",
      light: "2 Lights",
      src: balchonyImg,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5">
      {buttonContent.map((btn, index) => (
        <Button key={`inu${index}`} btnImg={btn.src} btnH={btn.name} btnS={btn.light} />
      ))}
    </div>
  );
};

export default ButtonMenu;
