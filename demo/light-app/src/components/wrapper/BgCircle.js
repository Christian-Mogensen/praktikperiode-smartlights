import { useContext } from "react";
import {ColorContext} from '../../hooks/colorContext'

const BgCircle = ({coords}) => {
  const {colorTheme} = useContext(ColorContext)
  return <div style={{"background":colorTheme}} className={`${coords} absolute h-[194px] w-[194px] opacity-20 blur-sm rounded-full`}></div>;
};

export default BgCircle;
