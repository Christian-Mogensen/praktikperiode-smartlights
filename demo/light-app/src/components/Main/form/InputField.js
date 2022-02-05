import React, { useState } from "react";
import Solution from "../../../assets/img/icons/intensityslider/Solution";
import Solution2 from "../../../assets/img/icons/intensityslider/Solution2";
import { motion } from "framer-motion";

const InputField = ({ fieldId, name, value, variant, onClick, onChange }) => {
  // const [value, setValue] = useState("");
  return (
    <motion.div variants={variant} className="flex items-center w-full">
      <div className="pr-2">
        { !fieldId ? <Solution /> : <Solution2 clr="#FFD139" />}
      </div>
      <div className="relative overflow-hidden w-full text-[#093B7B]">
        <input
          className="z-10 p-2 relative pt-8 pb-2 w-full  outline-none border-b transition-all box-border bg-transparent inputtrigger"
          type={name}
          name={name}
          onClick={onClick}
          id={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        <div className="inputbar"></div>
        {!fieldId&&<label className="absolute z-[9] text-lg top-1/2 -translate-y-1/2 left-3 text-current first-letter:capitalize labelanimation">
          {name}
        </label>}
      </div>
    </motion.div>
  );
};

export default InputField;
