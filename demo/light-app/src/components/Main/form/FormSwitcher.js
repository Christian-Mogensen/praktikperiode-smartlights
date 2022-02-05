import React from 'react';
import {motion} from 'framer-motion'

const FormSwitcher = ({variants, onClick, val}) => {
  return <motion.button
  className=" py-1 cursor-pointer w-full border-2 border-gray-200 rounded-lg bg-gray-100 place-self-end shadow-sm"
  variants={variants}
  onClick={onClick}
>
    {val}
</motion.button>;
};

export default FormSwitcher;
