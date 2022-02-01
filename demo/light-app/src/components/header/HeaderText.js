import React from 'react';

const HeaderText = ({val,icon,light}) => {
  return (<div className='cursor-pointer '> 
    <h1 className=' text-3xl font-bold text-white text-right'><span className='flex items-center gap-3'>{icon} {val}</span> <span className='block'>room</span> </h1>
    <h2 className='text-orange-400 text-lg font-bold'>{light}</h2>
    </div>);
};

export default HeaderText;
