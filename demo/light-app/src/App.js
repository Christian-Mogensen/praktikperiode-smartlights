import { useState } from "react";
import BackIcon from "./assets/img/icons/BackIcon";
import LightBtns from "./components/aside/LightBtns";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeaderTwo from "./components/header/HeaderTwo";
import Main from "./components/Main/Main";
import BgCircle from "./components/wrapper/BgCircle";
import Wrapper from "./components/wrapper/Wrapper";
import DemoLight from "./components/aside/DemoLight";

import {motion} from 'framer-motion'

function App() {
  const coordsArr = ["-left-10 -top-10", "-right-24 top-0", "left-10 top-40"];
  const [btnActive, setBtnActive] = useState(true);
  return (
    <Wrapper>
      <motion.div
      initial={{rotate:`${btnActive? -90:90}`}}
      animate={{rotate:0}}
      transition={{duration:1}}
      >
      {coordsArr.map((circlepos, index) => (
        <BgCircle key={index} coords={circlepos} />
        ))}
        </motion.div>
      {btnActive ? (
        <Header state={btnActive} />
      ) : (
        <HeaderTwo icon={<BackIcon />} clickedBtn={"Bed"} />
      )}
      {!btnActive && <DemoLight />}
      {!btnActive && <LightBtns />}
      
      <Main state={btnActive} />
      <Footer />
    </Wrapper>
  );
}

export default App;
