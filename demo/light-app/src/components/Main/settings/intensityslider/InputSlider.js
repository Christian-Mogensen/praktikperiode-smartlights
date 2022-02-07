import React, { useContext } from "react";
import Slider from 'react-input-slider';
import Solution from "../../../../assets/img/icons/intensityslider/Solution";
import Solution2 from "../../../../assets/img/icons/intensityslider/Solution2";
import { ColorContext } from "../../../../hooks/colorContext";
import IntensityMarks from "./IntensityMarks";

const InputSlider = () => {
const {stateAlphaVal, setStateAlphaVal, colorTheme} = useContext(ColorContext)


  return (
    <div className="flex items-end w-full gap-3">
      <div>
        <Solution />
      </div>
      <div className="flex flex-col w-full gap-3 px-2">

        <Slider className='w-full'
        // x={alphaValue.x}
        axis='x'
        xmin={10}
        xmax={99}
        x={stateAlphaVal.x}onChange={({ x }) => setStateAlphaVal(stateAlphaVal => ({ ...stateAlphaVal, x }))}
      
        styles={{
          track: {
            backgroundColor: '#cecece',
            height:'2px',
            width:'100%'
          },
          active: {
            backgroundColor: colorTheme
          },
          thumb: {
            width: 15,
            height: 15
          },
          disabled: {
            opacity: 0.5
          }
        }}
      
      />
      
        <IntensityMarks />
      </div>

      <div className="relative">
      <Solution2 clr="#cecece" />
      <div className={`z-10 absolute top-0 left-0 right-0 bottom-0`}>
      <Solution2 clr={`${colorTheme}${
                stateAlphaVal.x > 99 ? '':stateAlphaVal.x}`} />
      </div>
      </div>
    </div>
  );
};

export default InputSlider;
