import React from 'react';
import Header from '../../Header';
import ColorCircle from './ColorCircle';

const ColorOptions = () => {
  return (<div>
      <Header value='Colors' />
      <div className='flex gap-4 pb-6'>
          <ColorCircle clr='bg-red-400' />
          <ColorCircle clr='bg-green-400' />
          <ColorCircle clr='bg-blue-400' />
          <ColorCircle clr='bg-purple-400' />
          <ColorCircle clr='bg-pink-400' />
          <ColorCircle clr='bg-orange-400' />
          <ColorCircle clr='bg-white' val='+' />
      </div>
  </div>);
};

export default ColorOptions;
