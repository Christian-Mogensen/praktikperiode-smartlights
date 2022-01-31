import React from 'react';
import ProfileImage from './ProfileImage';
import ProfilUser from '../../assets/img/profile/randomdasd213tasd.jpg'
const Header = () => {
  return (<header className='flex justify-between items-center px-6 pt-8 w-[375px] fixed left-0 top-0'>
      <h1 className=' text-3xl font-bold text-white max-w-[10ch]'>Control Panel</h1>
      <div className="relative"><figure className=' h-14 w-14 rounded-full border-2 overflow-hidden profil__img-dropshadow'><img className='h-14 object-cover' src={ProfilUser} alt="" /></figure><div className="absolute bg-[#FF9898] h-3 w-3 top-0 right-0 rounded-full"></div></div>
  </header>);
};

export default Header;
