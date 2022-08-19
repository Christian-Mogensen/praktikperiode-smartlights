import React, { useState } from "react";
import Header from "../../Header";
import ColorCircle from "./ColorCircle";
import { motion } from "framer-motion";
import ColorPicker from "@vtaits/react-color-picker";
import SaveComp from "../SaveComp";
import LoginCloseIcon from "../../../../assets/img/icons/LoginCloseIcon";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiSaveArrow } from "react-icons/gi";

const COLOR = "#fa56cf";

const ColorOptions = () => {
  const [toggled, setToggled] = useState(false);

  // fetch(process.env.REACT_APP_URL)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const colorArr = [
    { clr: "rgb(255, 155, 155)", red: 255, green: 155, blue: 155, fmiv: 0 },
    { clr: "rgb(148, 235, 158)", red: 148, green: 235, blue: 158, fmiv: -23 },
    { clr: "rgb(148, 202, 235)", red: 148, green: 202, blue: 235, fmiv: -45 },
    { clr: "rgb(165, 148, 235)", red: 165, green: 148, blue: 235, fmiv: -65 },
    { clr: "rgb(222, 148, 235)", red: 222, green: 148, blue: 235, fmiv: -87 },
    { clr: "rgb(235, 208, 148)", red: 235, green: 208, blue: 148, fmiv: -107 },
  ];

  const [colorPick, setColorPick] = useState(colorArr);
  const handleAdd = () => {
    // const newColorPick = colorPick.slice();
    // newColorPick.push({clr:colorVal});
    // setColorPick(newColorPick);

    setColorPick((prevColorPick) => [...prevColorPick, { clr: colorVal }]);
  };

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
            <ColorCircle
              key={index}
              r={c.red}
              g={c.green}
              b={c.blue}
              clr={c.clr}
              val={c.val}
              fm={c.fmiv}
            />
          ))}
          {/* <motion.div
            initial={{ x: colorArr[0].fmiv }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            onClick={() => handleAdd()}
            style={{ background: `${colorArr[0].clr}` }}
            className={`cursor-pointer min-h-7 min-w-7 w-7 h-7 rounded-full grid place-content-center font-bold`}
          ></motion.div> */}

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
              <ColorPicker
                className="p-8"
                // saturationWidth={400} saturationHeight={500} hueWidth={100}
                value={colorVal}
                onDrag={onDrag}
              />
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
                <div
                  className="grid w-8 h-8 text-lg bg-white rounded-full shadow-md cursor-pointer shadow-gray-600 place-content-center"
                  onClick={handleAdd}
                >
                  <GiSaveArrow />
                </div>
                <div
                  className="grid w-8 h-8 text-lg bg-white rounded-full shadow-md cursor-pointer shadow-gray-600 place-content-center"
                  onClick={() => setToggled(!toggled)}
                >
                  <div>
                    <AiFillCloseCircle />
                  </div>
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
