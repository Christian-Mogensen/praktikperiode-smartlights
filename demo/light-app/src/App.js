import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// Components
import Footer from "./components/footer/Footer";
import Wrapper from "./components/wrapper/Wrapper";
import Home from "./components/path/Home";
import LightSetting from "./components/path/LightSetting";

function App() {
  const [textPos, setTextPos] = useState(false)
  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route exact path="/" element={<Home state={()=>setTextPos(!textPos)} />}></Route>
        <Route exact path="/LightSetting" element={<LightSetting state={()=>setTextPos(textPos)} />}></Route>
      </Routes>
      </AnimatePresence>
      <Footer />
    </Wrapper>
  );
}

export default App;
