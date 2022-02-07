import React, { useContext, useState } from "react";
import { getTrackBackground, Range } from "react-range";
import Solution from "../../../../assets/img/icons/intensityslider/Solution";
import Solution2 from "../../../../assets/img/icons/intensityslider/Solution2";
import DemonstrationLight from "../../../../assets/img/icons/lights/DemonstrationLight";
import { ColorContext, useColorContext } from "../../../../hooks/colorContext";
import IntensityMarks from "./IntensityMarks";
import { motion } from "framer-motion";

import Slider from 'react-input-slider';


// const STEP = 1;
// const MIN = 0;
// const MAX = 99;

// class InputSlider extends React.Component {
//   static contextType = ColorContext;
//   setAlphaValue = (alphaValue) => {
//     this.setState({ alphaValue });
//   };
//   state = {
//     values: [0],
//     alphaValue: this.context.alphaValue,
//     setAlphaValue: this.setAlphaValue,
//   };

//   render() {
//     return (
//       <div className="flex items-end w-full gap-3">
//         <motion.div
//           className="fixed -z-30 top-0 left-[-180px]"
//           initial={{ y: -100 }}
//           animate={{ y: 0, x:380 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//         >
//           <DemonstrationLight
//             alpha={
//               this.state.values < 10
//                 ? "10"
//                 : this.state.values < 90
//                 ? Math.ceil(this.state.values)
//                 : ""
//             }
//           />
//         </motion.div>
//         <div>
//           <Solution />
//         </div>
//         <div className="flex flex-col w-full gap-3 px-2">
//           <Range
//             values={this.state.values}
//             step={STEP}
//             min={MIN}
//             max={MAX}
//             onChange={(values) =>
//               this.setState({ values }, this.setAlphaValue({ values }))
//             }
//             renderTrack={({ props, children }) => (
//               <div
//                 onMouseDown={props.onMouseDown}
//                 onTouchStart={props.onTouchStart}
//                 style={{
//                   ...props.style,
//                   display: "flex",
//                   width: "100%",
//                 }}
//               >
//                 <div
//                   ref={props.ref}
//                   style={{
//                     height: "2px",
//                     width: "100%",
//                     borderRadius: "4px",
//                     background: getTrackBackground({
//                       values: this.state.values,
//                       colors: [`${this.context.colorTheme}`, "#ccc"],
//                       min: MIN,
//                       max: MAX,
//                     }),
//                     alignSelf: "center",
//                   }}
//                 >
//                   {children}
//                 </div>
//               </div>
//             )}
//             renderThumb={({ props, isDragged }) => (
//               <div
//                 {...props}
//                 style={{
//                   ...props.style,
//                   height: "15px",
//                   width: "15px",

//                   borderRadius: "9999px",
//                   backgroundColor: "#FFF",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   boxShadow: `0px 2px 6px ${this.context.colorTheme}`,
//                 }}
//               >
//                 <div
//                   style={{
//                     height: "2px",
//                     width: "2px",
//                     backgroundColor: isDragged
//                       ? `${this.context.colorTheme}`
//                       : "#CCC",
//                   }}
//                 />
//               </div>
//             )}
//           />
//           <IntensityMarks />
//         </div>
//         <div className="relative">
//           <Solution2 clr="#cecece" />
//           <div className={`z-10 absolute top-0 left-0 right-0 bottom-0`}>
//             <Solution2
//               clr={`${this.context.colorTheme}${
//                 this.state.values < 10
//                   ? "00"
//                   : this.state.values < 90
//                   ? Math.ceil(this.state.values)
//                   : ""
//               }`}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default InputSlider;

const InputSlider = () => {
const {stateAlphaVal, setStateAlphaVal, colorTheme} = useContext(ColorContext)


console.log(stateAlphaVal);
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
