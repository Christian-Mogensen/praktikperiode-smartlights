import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ColorContext } from "../../../hooks/colorContext";
const PowerOff = ({ toggle }) => {
  const { colorTheme } = useContext(ColorContext);
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.1 }}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      className="cursor-pointer"
    >
      <defs>
        <filter
          id="Ellipse_22"
          width="50"
          height="50"
          x="0"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3"></feOffset>
          <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
          <feFlood floodColor="#002d67" floodOpacity="0.098"></feFlood>
          <feComposite in2="blur" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
      </defs>
      <g data-name="power off" transform="translate(-307.8 -244.8)">
        <g filter="url(#Ellipse_22)" transform="translate(307.8 244.8)">
          <circle
            cx="16"
            cy="16"
            r="16"
            fill="#fff"
            data-name="Ellipse 22"
            transform="translate(9 6)"
          ></circle>
        </g>
        <path
          fill={colorTheme}
          style={toggle ? { opacity: 0.5, fill: "gray" } : { opacity: 1 }}
          d="M14.421 1.913a8.767 8.767 0 11-10.189 0 .851.851 0 011.237.272l.559.993a.848.848 0 01-.233 1.1 5.939 5.939 0 107.067 0 .843.843 0 01-.23-1.092l.559-.993a.847.847 0 011.23-.276zm-3.676 7.421V.849A.846.846 0 009.9 0H8.765a.846.846 0 00-.849.849v8.485a.846.846 0 00.849.849H9.9a.846.846 0 00.845-.849z"
          data-name="Icon awesome-power-off"
          transform="translate(323.209 257.587)"
        ></path>
      </g>
    </motion.svg>
  );
};

export default PowerOff;
