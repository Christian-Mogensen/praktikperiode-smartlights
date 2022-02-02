import React from 'react';
import ProfileImage from './ProfileImage';
import ProfilUser from '../../assets/img/profile/randomdasd213tasd.jpg'
import HeaderText from './HeaderText';
const Header = ({state}) => {
  return (<header className='flex justify-between items-center px-6 pt-8 w-[375px] fixed left-0 top-0'>
      <HeaderText state={state} val='Control' scdword='Panel' />
  <ProfileImage src={ProfilUser}/>
  </header>);
};

export default Header;
