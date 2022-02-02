import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ColorProvider } from "./hooks/colorContext";

// Components
import Footer from "./components/footer/Footer";
import Wrapper from "./components/wrapper/Wrapper";
import Home from "./components/path/Home";
import LightSetting from "./components/path/LightSetting";

function App() {
  const [textPos, setTextPos] = useState(false);
  return (
    <ColorProvider>
      <AnimatePresence exitBeforeEnter>
        <Wrapper>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home state={() => setTextPos(!textPos)} />}
            ></Route>

            <Route
              exact
              path="/LightSetting"
              element={<LightSetting state={() => setTextPos(textPos)} />}
            ></Route>
          </Routes>
          <Footer />
        </Wrapper>
      </AnimatePresence>
    </ColorProvider>
  );
}

export default App;
