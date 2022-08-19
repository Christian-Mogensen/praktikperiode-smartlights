import React, { useContext, useEffect, useMemo, useState } from "react";
// import Slider from 'react-input-slider';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Solution from "../../../../assets/img/icons/intensityslider/Solution";
import Solution2 from "../../../../assets/img/icons/intensityslider/Solution2";
import { ColorContext } from "../../../../hooks/colorContext";
import IntensityMarks from "./IntensityMarks";
import { throttle } from "lodash";
const InputSlider = () => {
  const { stateAlphaVal, setStateAlphaVal, colorTheme } =
    useContext(ColorContext);

  const [converteddata, setConverteddata] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_URL, {
      method: "PUT",
      body: JSON.stringify({ bri: converteddata }),
    });
  }, [converteddata]);

  function alphaHandle(value) {
    setStateAlphaVal(value);
    setConverteddata(Math.floor(value * 2.54));
  }

  const throttleAlphaHandler = useMemo(() => throttle(alphaHandle, 110), []);
  return (
    <div className="flex items-end w-full gap-3">
      <div>
        <Solution />
      </div>
      <div className="flex flex-col w-full gap-3 px-2">
        <Slider
          step={6}
          min={1}
          max={99}
          onChange={throttleAlphaHandler}
          value={stateAlphaVal}
          trackStyle={{
            background: colorTheme,
            opacity: "0." + stateAlphaVal,
            height: "2px",
          }}
          railStyle={{
            background: "#cecece",
            height: "2px",
          }}
          handleStyle={{
            borderColor: colorTheme,
            height: "15px",
            width: "15px",
          }}
        />
        <IntensityMarks />
      </div>

      <div className="relative">
        <Solution2 clr="#cecece" />
        <div className={`z-10 absolute top-0 left-0 right-0 bottom-0`}>
          <Solution2 clr={`${colorTheme}`} opacity={stateAlphaVal} />
        </div>
      </div>
    </div>
  );
};

export default InputSlider;
