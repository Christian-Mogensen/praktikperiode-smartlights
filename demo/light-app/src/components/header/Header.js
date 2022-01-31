import React from 'react';
import ProfileImage from './ProfileImage';
import ProfilUser from '../../assets/img/profile/randomdasd213tasd.jpg'
const Header = () => {
  return (<header className='flex justify-between items-center px-6 pt-8 w-[375px] fixed left-0 top-0'>
      <h1 className=' text-3xl font-bold text-white max-w-[10ch]'>Control Panel</h1>
  <ProfileImage src={ProfilUser}/>
  </header>);
};

export default Header;
