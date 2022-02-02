import { motion } from "framer-motion";

import SettingWrapper from "../Main/settings/SettingWrapper";
import BgCircle from "../wrapper/BgCircle";
import HeaderTwo from "../header/HeaderTwo";
import BackIcon from "../../assets/img/icons/BackIcon";
import DemoLight from "../aside/DemoLight";
import LightBtns from "../aside/LightBtns";
import Main from "../Main/Main";

const LightSetting = () => {
  const coordsArr = ["-left-10 -top-10", "-right-24 top-0", "left-10 top-40"];

  return (
    <>
      <motion.div
            initial={{rotate:90}}
            animate={{rotate:0}}
            layout
            layoutId="circle"
      >
        {coordsArr.map((circlepos, index) => (
          <BgCircle key={index} coords={circlepos} />
        ))}
      </motion.div>
      <HeaderTwo icon={<BackIcon />} clickedBtn={"Bed"} />
      <DemoLight />
      <LightBtns />
      <Main content={<SettingWrapper />} />
    </>
  );
};

export default LightSetting;
