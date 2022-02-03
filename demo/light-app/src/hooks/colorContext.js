import { createContext, useMemo, useState } from "react";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("#FFD139");
  const [alphaValue, setAlphaValue] = useState('99');
  const [roomStartWord, setRoomStartWord] = useState('Control')
  const [roomEndWord, setRoomEndWord] = useState('panel')
  const [lightHeader, setLightHeader] = useState('')
  

  const value = useMemo(() => ({ colorTheme, setColorTheme, alphaValue, setAlphaValue, roomStartWord, setRoomStartWord, roomEndWord, setRoomEndWord, lightHeader, setLightHeader }), [colorTheme, alphaValue, roomStartWord, roomEndWord, lightHeader]);
  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};
export { ColorContext, ColorProvider };
