import React from "react";
import ButtonMenu from "./buttons/ButtonMenu";
import SettingWrapper from "./settings/SettingWrapper";
import {motion} from 'framer-motion'
const Main = ({ state }) => {
  return (
    <motion.main 
    transition={{duration:1}}
    className="fixed bottom-[68px] left-0 w-[375px] bg-[#F6F8FB] max-h-[656px] rounded-t-[31px] p-6">
      {state ? <ButtonMenu /> : <SettingWrapper />}
    </motion.main>
  );
};

export default Main;
