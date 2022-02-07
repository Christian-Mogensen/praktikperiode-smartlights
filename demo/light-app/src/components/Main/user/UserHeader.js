import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';

const UserHeader = () => {
    const [user] = useAuthState(auth)
    const userHeaderArr = []
    userHeaderArr.push(user)
  return <h2 className='text-right absolute top-28 right-5 w-full text-white'>{user?`${userHeaderArr[0].displayName}`: 'Guest'}</h2>;
};

export default UserHeader;
