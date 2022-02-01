
import React from "react";
import { Range, getTrackBackground } from "react-range";
import Solution from "../../../../assets/img/icons/intensityslider/Solution";
import Solution2 from "../../../../assets/img/icons/intensityslider/Solution2";
import IntensityMarks from "./IntensityMarks";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;


class InputSlider extends React.Component {


  
  state = {
    values: [0]
  };

  render() {
    return (
        <div className="flex items-end w-full gap-3">
<div><Solution /></div>
      <div className="px-2 w-full flex flex-col gap-3"
        
        >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) =>( this.setState({ values },
            console.log(`rgba(255, 210, 57,0.${Math.ceil(this.state.values)})`)))}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "2px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                      values: this.state.values,
                    colors: ["#ffd239", "#ccc"],
                    min: MIN,
                    max: MAX
                }),
                  alignSelf: "center"
                }}
                >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
              <div
              {...props}
              style={{
                  ...props.style,
                  height: "15px",
                width: "15px",
                
                borderRadius: "9999px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
            }}
            >
              <div
                style={{
                  height: "2px",
                  width: "2px",
                  backgroundColor: isDragged ? "#ffd239" : "#CCC"
                }}
                />
            </div>
          )}
        />
<IntensityMarks />
      </div>
      <div className="relative"><Solution2 clr="#cecece" />
      <div className={`z-10 absolute top-0 left-0 right-0 bottom-0`}><Solution2 clr={`rgba(255, 210, 57,${this.state.values < 100? '0.'+ Math.ceil(this.state.values):100})`} /></div>
</div></div>
    );
  }
}
export default InputSlider