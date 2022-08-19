import React, { useContext } from "react";
import SceneBulb from "../../../../assets/img/icons/scenesection/SceneBulb";
import { motion } from "framer-motion";
import { ColorContext } from "../../../../hooks/colorContext";
const SceneButton = ({ fmiv, val, keyframe }) => {
  const { setScene } = useContext(ColorContext);

  const sceneFunc = () => {
    fetch(process.env.REACT_APP_URL, {
      method: "PUT",
      body: JSON.stringify({ effect: "colorloop" }),
    });
    setScene(keyframe);
  };
  return (
    <motion.div
      onClick={sceneFunc}
      initial={{ x: fmiv }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, delay: 1 }}
      className={`h-14 gradient${val} cursor-pointer rounded-[10px] text-white grid button-column gap-3 items-center`}
    >
      {" "}
      <div className="flex items-center justify-end w-full h-full ">
        <SceneBulb />
      </div>
      <span>{val}</span>
    </motion.div>
  );
};

export default SceneButton;
