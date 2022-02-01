import React from "react";
import Header from "../../Header";
import ColorCircle from "./ColorCircle";
import { motion } from "framer-motion";

const ColorOptions = () => {
  const colors = [
    { clr: "bg-red-400", val: "", fmiv:0 },
    { clr: "bg-green-400", val: "", fmiv:-23 },
    { clr: "bg-blue-400", val: "", fmiv:-45 },
    { clr: "bg-purple-400", val: "", fmiv:-65 },
    { clr: "bg-pink-400", val: "", fmiv:-87 },
    { clr: "bg-orange-400", val: "", fmiv:-107 },
    { clr: "bg-white", val: "+", 
     fmiv:-130 },
  ];
  return (
    <div>
      <Header value="Colors" />
      <motion.div
      className="flex gap-4 pb-6">
        {colors.map((c, index) => (
          <ColorCircle key={index} clr={c.clr} val={c.val} fm={c.fmiv} />
        ))}
      </motion.div>
    </div>
  );
};

export default ColorOptions;
