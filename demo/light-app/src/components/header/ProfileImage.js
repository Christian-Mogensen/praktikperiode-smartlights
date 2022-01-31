import React from 'react';

const ProfileImage = ({src}) => {
  return <div className="relative"><figure className='overflow-hidden border-2 rounded-full  h-14 w-14 profil__img-dropshadow'><img className='object-cover h-14' src={src} alt="" /></figure><div className="absolute bg-[#FF9898] h-3 w-3 top-0 right-0 rounded-full"></div></div>
  ;
};

export default ProfileImage;
