import React from "react";
import Header from "../../Header";
import SceneButton from "./SceneButton";

const SceneContainer = () => {
const sceneArr = [
  {val:"Birthday",clr:"bg-red-400",fm:0, scene:'keyframeBirthday'},
  {val:"Party",clr:"bg-purple-400",fm:-50, scene:'keyframeParty'},
  {val:"Relax",clr:"bg-blue-400",fm:0, scene:'keyframeRelax'},
  {val:"Fun",clr:"bg-green-400",fm:-50, scene:'keyframeFun'},
]

  return (
    <div className="pb-12 ">
      <Header value="Scenes" />
      <div className="grid grid-cols-2 gap-2 w-full">
        {sceneArr.map((s,index)=>(
        <SceneButton key={index} val={s.val} clr={s.clr} fmiv={s.fm} keyframe={s.scene} />))}
      </div>
    </div>
  );
};

export default SceneContainer;
