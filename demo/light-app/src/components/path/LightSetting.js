
import SettingWrapper from "../Main/settings/SettingWrapper";
import HeaderTwo from "../header/HeaderTwo";
import BackIcon from "../../assets/img/icons/BackIcon";
import LightBtns from "../aside/LightBtns";
import Main from "../Main/Main";
import DemonstrationLight from "../../assets/img/icons/lights/DemonstrationLight";
import {motion} from 'framer-motion'

const LightSetting = () => {

  return (
    <>
      <HeaderTwo icon={<BackIcon />} clickedBtn={"Bed"} />
      <motion.div
        className="fixed z-30 top-0 left-[210px]"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <DemonstrationLight />
      </motion.div>
      <LightBtns />
      <Main content={<SettingWrapper />} />
    </>
  );
};

export default LightSetting;
