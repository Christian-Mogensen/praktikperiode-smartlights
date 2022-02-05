import React from "react";
import { motion } from "framer-motion";
const InputSubmit = ({ variant, onClick, val }) => {
  return (
    <motion.button
    onClick={onClick}
      variants={variant}
      type="submit"
      value="Sign in"
      className="py-3 cursor-pointer w-full rounded-lg bg-yellow-400 text-white place-self-end">{val}</motion.button>
  );
};

export default InputSubmit;
