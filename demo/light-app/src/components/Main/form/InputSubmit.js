import React from "react";
import { motion } from "framer-motion";
const InputSubmit = ({ variant, onClick, val }) => {
  return (
    <motion.button
    onClick={onClick}
      variants={variant}
      type="submit"
      value="Sign in"
      className="py-3 cursor-pointer w-full rounded-lg border-gray-200 border-2 place-self-end shadow-sm mb-3">{val}</motion.button>
  );
};

export default InputSubmit;
