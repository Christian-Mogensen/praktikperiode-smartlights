import React from 'react';
import {motion} from 'framer-motion'

const FormSwitcher = ({ icon, onClick, val, iconPos}) => {
  return <motion.button
  className=" py-1 cursor-pointer w-full border-2 relative border-gray-200 rounded-lg bg-gray-100 place-self-end shadow-sm"
  initial={{opacity:0}} animate={{opacity:1}}
  onClick={onClick}
>
    {val}<div className={`absolute top-1/2 text-base text-gray-600 -translate-y-1/2 ${iconPos}`}>{icon}</div>
</motion.button>;
};

export default FormSwitcher;
