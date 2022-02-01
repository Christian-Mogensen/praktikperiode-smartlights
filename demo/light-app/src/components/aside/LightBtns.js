import React from 'react';
import lightBulb from '../../assets/img/icons/lights/surface1.png'
import lightDesk from '../../assets/img/icons/lights/furniture-and-household.png'
import lightbed from '../../assets/img/icons/lights/bed.png'
const LightBtns = () => {
  const lightsVariations = [
    {
      type:'Main Light', 
      icon: lightBulb
    },
    {
      type:'Desc Lights', 
      icon: lightDesk
    },
    {
      type:'Bed Light', 
      icon: lightbed
    },
  ]
  return <div className='absolute z-50 flex gap-[15px] bottom-[570px] left-6 '>
{lightsVariations.map((light, index) =>(
  <div className='btn-variations cursor-pointer text-[13px] font-bold h-[45px] w-32 grid light-grid place-items-center gap-3 btn__dropshadow-blue bg-white text-[#093B7B] rounded-[12px]' key={index}><div className='place-self-center justify-self-end'><img src={light.icon} alt="" /></div><span className=' justify-self-start '>{light.type}</span></div>
))}
  </div>;
};

export default LightBtns;
