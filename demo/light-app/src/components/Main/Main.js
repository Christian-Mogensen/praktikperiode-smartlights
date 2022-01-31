import React from 'react';
import ButtonMenu from './buttons/ButtonMenu';
import Header from './Header';

const Main = () => {
  return <main className='fixed bottom-[68px] left-0 w-[375px] bg-[#F6F8FB] max-h-[656px] rounded-t-[31px] p-6'>
      <Header value={'All rooms'} />
      <ButtonMenu />
  </main>;
};

export default Main;
