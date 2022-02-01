import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// Components
import Footer from "./components/footer/Footer";
import Wrapper from "./components/wrapper/Wrapper";
import Home from "./components/path/Home";
import LightSetting from "./components/path/LightSetting";

function App() {
  return (
    <Wrapper>
      <AnimatePresence>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/LightSetting" element={<LightSetting />}></Route>
      </Routes>
      </AnimatePresence>
      <Footer />
    </Wrapper>
  );
}

export default App;
