import React from 'react';
import BackIcon from '../../assets/img/icons/BackIcon';

const HeaderTextTwo = ({val}) => {
  return <h1 className='text-3xl font-bold text-white header-width text-right'><BackIcon /> {val}</h1>;
};

export default HeaderTextTwo;
