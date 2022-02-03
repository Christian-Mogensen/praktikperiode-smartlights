import { motion } from "framer-motion";

import SettingWrapper from "../Main/settings/SettingWrapper";
import HeaderTwo from "../header/HeaderTwo";
import BackIcon from "../../assets/img/icons/BackIcon";
import LightBtns from "../aside/LightBtns";
import Main from "../Main/Main";
import BgCircleContainer from "../wrapper/BgCircleContainer";

const LightSetting = () => {

  return (
    <>
      <HeaderTwo icon={<BackIcon />} clickedBtn={"Bed"} />

      <LightBtns />
      <Main content={<SettingWrapper />} />
    </>
  );
};

export default LightSetting;
