import { createContext, useContext, useMemo, useState } from "react";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("#FFD139");
  const [stateAlphaVal, setStateAlphaVal] = useState({ x: 10 });
  const [scene, setScene] = useState("");

  const [roomStartWord, setRoomStartWord] = useState("Control");
  const [roomEndWord, setRoomEndWord] = useState("panel");
  const [lightHeader, setLightHeader] = useState("");
  const [login, setLogin] = useState(true);
  const [value, setValue] = useState(true);
  const [lightToggle, setLightToggle] = useState(false);

  const [createAcc, setCreateAcc] = useState(true);

  const valueLib = useMemo(
    () => ({
      lightToggle,
      setLightToggle,
      colorTheme,
      setColorTheme,
      stateAlphaVal,
      setStateAlphaVal,
      roomStartWord,
      setRoomStartWord,
      roomEndWord,
      setRoomEndWord,
      lightHeader,
      setLightHeader,
      scene,
      setScene,
      login,
      setLogin,
      value,
      setValue,
      createAcc,
      setCreateAcc,
    }),
    [
      lightToggle,
      colorTheme,
      stateAlphaVal,
      roomStartWord,
      roomEndWord,
      lightHeader,
      scene,
      login,
      value,
      createAcc,
    ]
  );
  return (
    <ColorContext.Provider value={valueLib}>{children}</ColorContext.Provider>
  );
};
export { ColorContext, ColorProvider };

export const useColorContext = () => {
  return useContext(ColorContext);
};
