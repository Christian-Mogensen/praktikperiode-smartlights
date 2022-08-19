import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ColorContext } from "../../../../hooks/colorContext";
import ColorConverter from "cie-rgb-color-converter";
const ColorCircle = ({ r, g, b, clr, val, fm }) => {
  let xy = ColorConverter.rgbToXy(r, g, b);
  const { setColorTheme, setScene } = useContext(ColorContext);
  const [color, setColor] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_URL, {
      method: "PUT",
      body: JSON.stringify({
        on: true,
        xy: [color.x, color.y],
        effect: "none",
      }),
    });
  }, [color]);

  const colorFunc = () => {
    setColor(xy);
    setColorTheme(clr);
    setScene("");
  };
  return (
    <motion.button
      initial={{ x: fm }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, delay: 1 }}
      onClick={colorFunc}
      style={{ background: `${clr}` }}
      className={`cursor-pointer min-h-7 min-w-7 w-7 h-7 rounded-full grid place-content-center font-bold`}
    />
  );
};

export default ColorCircle;
