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

function App() {
  const coordsArr = ["-left-10 -top-10", "-right-24 top-0", "left-10 top-40"];
  const [btnActive, setBtnActive] = useState(false);
  return (
    <Wrapper>
      {coordsArr.map((circlepos, index) => (
        <BgCircle key={index} coords={circlepos} />
      ))}
      {btnActive ? (
        <Header />
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
