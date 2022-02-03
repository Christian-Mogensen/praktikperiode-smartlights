import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorContext } from "../../hooks/colorContext";

const HeaderText = ({ val, icon, light, scdword, state }) => {
  const {
    colorTheme,
    roomStartWord,
    roomEndWord,
    setRoomStartWord,
    setRoomEndWord,
    lightHeader,
    setLightHeader
  } = useContext(ColorContext);

  return (
    <Link
      to="/"
      onClick={() => {
        setRoomStartWord("Control");
        setRoomEndWord("panel");
        setLightHeader("");
      }}
    >
      <div className="cursor-pointer ">
        <h1
          className={`text-3xl font-bold ${
            state ? "text-left" : "text-right"
          }  text-white `}
        >
          <span className="flex items-center gap-3">
            {icon} {roomStartWord}
          </span>{" "}
          <span className="block">{roomEndWord}</span>{" "}
        </h1>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ color: `${colorTheme}` }}
          className="text-lg font-bold"
        >
          {lightHeader}
        </motion.h2>
      </div>
    </Link>
  );
};

export default HeaderText;
