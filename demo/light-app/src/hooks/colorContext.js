import { createContext, useMemo, useState } from "react";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("#FFD139");
  const [alphaValue, setAlphaValue] = useState('99');

  const value = useMemo(() => ({ colorTheme, setColorTheme, alphaValue, setAlphaValue }), [colorTheme, alphaValue]);

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};
export { ColorContext, ColorProvider };
