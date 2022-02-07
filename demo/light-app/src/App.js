import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ColorProvider } from "./hooks/colorContext";

// Components
import Footer from "./components/footer/Footer";
import Wrapper from "./components/wrapper/Wrapper";
import Home from "./components/path/Home";
import LightSetting from "./components/path/LightSetting";
import BgCircleContainer from "./components/wrapper/BgCircleContainer";
import BgCircle from "./components/wrapper/BgCircle";
import LoadingScreen from "./prototype/LoadingScreen";


function App() {
  const [textPos, setTextPos] = useState(false);
  const coordsArr = ["-left-10 -top-10", "-right-24 top-0", "left-10 top-40"];

  setTimeout(() => {
    setTextPos(true)
  }, 3000);

 
  return (<>
  {!textPos? <LoadingScreen />:
    <ColorProvider>
      <AnimatePresence exitBeforeEnter>
        <Wrapper>
        <BgCircleContainer>
        {coordsArr.map((circlepos, index) => (
          <BgCircle key={index} coords={circlepos} />
          ))}
      </BgCircleContainer>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home state={() => setTextPos(!textPos)} />}
              ></Route>

            <Route
              exact
              path="/:slug"
              element={<LightSetting state={() => setTextPos(textPos)} />}
              ></Route>
          </Routes>
          <Footer />
        </Wrapper>
      </AnimatePresence>
    </ColorProvider>
}</>
  );
}

export default App;
