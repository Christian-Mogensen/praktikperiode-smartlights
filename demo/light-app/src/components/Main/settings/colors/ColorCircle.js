import React from 'react';

const ColorCircle = ({clr, val}) => {
  return <div className={`${clr} cursor-pointer h-7 w-7 rounded-full grid place-content-center font-bold`}>{val}</div>;
};

export default ColorCircle;
