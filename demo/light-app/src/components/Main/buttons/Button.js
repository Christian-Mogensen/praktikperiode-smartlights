import React from 'react';

const Button = ({btnImg,btnH, btnS}) => {
  return <div className='bg-white h-[150px] place-self-center rounded-[20px] w-[150px] p-5 btn__dropshadow-blue flex flex-col justify-between'>
      <div><img src={`${btnImg}`} alt="" /></div>
      <div><span className='block font-bold text-lg'>{btnH}</span>
      <span className='text-[#FFA939] font-bold text-[13px]'>{btnS}</span></div>
      </div>;
};

export default Button;
