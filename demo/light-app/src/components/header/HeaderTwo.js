import React from 'react';
import HeaderTextTwo from './HeaderText';
const HeaderTwo = ({clickedBtn, icon}) => {
  return (<header className='flex justify-between items-center px-6 pt-8 w-[375px] fixed left-0 top-0'>
      <HeaderTextTwo scdword='Room' val={clickedBtn} icon={icon} light='4 lights' />
  </header>);
};

export default HeaderTwo;
