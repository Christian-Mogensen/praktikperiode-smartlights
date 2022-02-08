import React, { useState } from "react";
import Header from "../../Header";
import ColorCircle from "./ColorCircle";
import { motion } from "framer-motion";
import ColorPicker from "@vtaits/react-color-picker";
import SaveComp from "../SaveComp";
import LoginCloseIcon from '../../../../assets/img/icons/LoginCloseIcon'
import { AiFillCloseCircle } from "react-icons/ai";
import { GiSaveArrow } from "react-icons/gi";


const COLOR = "#fa56cf";

const ColorOptions = () => {
  const [toggled, setToggled] = useState(false);
  
  
  const colorArr = [
    { clr: "#FF9B9B", val: "", fmiv: 0 },
    { clr: "#94EB9E", val: "", fmiv: -23 },
    { clr: "#94CAEB", val: "", fmiv: -45 },
    { clr: "#A594EB", val: "", fmiv: -65 },
    { clr: "#DE94EB", val: "", fmiv: -87 },
    { clr: "#EBD094", val: "", fmiv: -107 },
  ];
  const [colorPick, setColorPick] = useState(colorArr)
  const handleAdd = () => {
    // const newColorPick = colorPick.slice();
    // newColorPick.push({clr:colorVal});
    // setColorPick(newColorPick);
  
  setColorPick ((prevColorPick)=> [...prevColorPick, {clr:colorVal}]) 
  
  }

  const [colorVal, setColorVal] = useState(COLOR);
  const onDrag = (newColor) => {
    setColorVal(newColor);
  };

  return (
    <>
      <div>
        <Header value="Colors" />
        <motion.div className="grid grid-cols-8 gap-4 pb-6">
          {colorPick.map((c, index) => (
            <ColorCircle key={index} clr={c.clr} val={c.val} fm={c.fmiv} />
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            onClick={() => setToggled(!toggled)}
            className={`relative cursor-pointer bg-white min-h-7 min-w-7 w-7 h-7 rounded-full grid place-content-center font-bold`}
          >
            +
          </motion.div>
          {toggled && (
            <div className="fixed top-0 bottom-0 left-0 right-0">
              {" "}
              <ColorPicker className='p-8'
              // saturationWidth={400} saturationHeight={500} hueWidth={100} 
              value={colorVal} onDrag={onDrag} />
              <div className="flex items-end gap-5">
                <div
                  style={{
                    background: colorVal,
                    width: 100,
                    height: 50,
                    color: "white",
                  }}
                >
                  {colorVal}
                </div>
                <div className="grid w-8 h-8 text-lg bg-white rounded-full shadow-md cursor-pointer shadow-gray-600 place-content-center" onClick={handleAdd}>
                  <GiSaveArrow />
                </div>
                <div className="grid w-8 h-8 text-lg bg-white rounded-full shadow-md cursor-pointer shadow-gray-600 place-content-center" onClick={()=>setToggled(!toggled)}>
                  <div><AiFillCloseCircle /></div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default ColorOptions;
