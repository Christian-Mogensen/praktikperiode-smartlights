import { createContext, useMemo, useState } from "react";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("#FFD139");
  const [alphaValue, setAlphaValue] = useState("99");
  const [roomStartWord, setRoomStartWord] = useState("Control");
  const [roomEndWord, setRoomEndWord] = useState("panel");
  const [lightHeader, setLightHeader] = useState("");
  const [scene, setScene] = useState("");
  const [login, setLogin] = useState(true);
  const [value, setValue] = useState(true);

  const valueLib = useMemo(
    () => ({
      colorTheme,
      setColorTheme,
      alphaValue,
      setAlphaValue,
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
    }),
    [
      colorTheme,
      alphaValue,
      roomStartWord,
      roomEndWord,
      lightHeader,
      scene,
      login,
      value,
    ]
  );
  return (
    <ColorContext.Provider value={valueLib}>{children}</ColorContext.Provider>
  );
};
export { ColorContext, ColorProvider };
