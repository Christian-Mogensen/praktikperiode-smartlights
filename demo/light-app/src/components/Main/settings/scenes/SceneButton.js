import React from 'react';
import SceneBulb from '../../../../assets/img/icons/scenesection/SceneBulb';
const SceneButton = ({clr,val}) => {
  return <div className={`h-14 ${clr} cursor-pointer rounded-[10px] text-white grid button-column gap-3 items-center`}> <div className="w-full h-full flex justify-end items-center "><SceneBulb /></div><span>{val}</span></div>;
};

export default SceneButton;
