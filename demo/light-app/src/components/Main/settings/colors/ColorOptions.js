import React from "react";
import Header from "../../Header";
import ColorCircle from "./ColorCircle";
import { motion } from "framer-motion";

const ColorOptions = () => {
  const colors = [
    { clr: "#FF9B9B", val: "", fmiv:0 },
    { clr: "#94EB9E", val: "", fmiv:-23 },
    { clr: "#94CAEB", val: "", fmiv:-45 },
    { clr: "#A594EB", val: "", fmiv:-65 },
    { clr: "#DE94EB", val: "", fmiv:-87 },
    { clr: "#EBD094", val: "", fmiv:-107 },
    { clr: "#FFFFFF", val: "+", fmiv:-130 }
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
