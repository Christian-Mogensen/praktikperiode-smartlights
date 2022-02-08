import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const ProfileImage = ({src}) => {
  const [user]=useAuthState(auth)
  return <div className="relative"><figure className='overflow-hidden border-2 rounded-full h-14 w-14 profil__img-dropshadow'>{user?<img className='object-cover h-14' src={src} alt="" />:<div className='grid w-full h-full text-xl text-white bg-gray-900 place-content-center'>G</div>}</figure><div className={`absolute ${user&&'bg-[#FF9898]'} h-3 w-3 top-0 right-0 rounded-full`}></div></div>
  
};

export default ProfileImage;
