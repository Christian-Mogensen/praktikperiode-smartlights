import React from "react";
import Header from "../../Header";
import SceneButton from "./SceneButton";

const SceneContainer = () => {
  return (
    <div className="pb-12 ">
      <Header value="Scenes" />
      <div className="grid grid-cols-2 gap-2 w-full">
        <SceneButton val="Birthday" clr={"bg-red-400"} />
        <SceneButton val="Party" clr={"bg-purple-400"} />
        <SceneButton val="Relax" clr={"bg-blue-400"} />
        <SceneButton val="Fun" clr={"bg-green-400"} />
      </div>
    </div>
  );
};

export default SceneContainer;
