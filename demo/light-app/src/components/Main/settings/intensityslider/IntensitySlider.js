import React from "react";
import Header from "../../Header";
import InputSlider from "./InputSlider";
import { motion } from "framer-motion";
const IntensitySlider = () => {
  return (
    <div className="pb-6 w-full">
      <Header value="Intensity slider" />
      <motion.div
        initial={{ width: "60%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, delay: 1 }}
        className=" w-full"
      >
        <InputSlider />
      </motion.div>
    </div>
  );
};

export default IntensitySlider;
