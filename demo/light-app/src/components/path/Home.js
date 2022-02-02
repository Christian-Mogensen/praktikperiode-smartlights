import { motion } from "framer-motion";

import BgCircle from "../wrapper/BgCircle";
import Header from "../header/Header";
import Main from "../Main/Main";
import ButtonMenu from "../Main/buttons/ButtonMenu";

const Home = ({state}) => {
  const coordsArr = ["-left-10 -top-10", "-right-24 top-0", "left-10 top-40"];
  return (
    <>
      <motion.div
      initial={{rotate:90}}
      exit={{rotate:-90}}
      animate={{rotate:0}}
      layout
      layoutId="circle"
      >
        {coordsArr.map((circlepos, index) => (
          <BgCircle key={index} coords={circlepos} />
        ))}
      </motion.div>

      <Header state={state} />
      <Main content={<ButtonMenu />} />
    </>
  );
};

export default Home;
