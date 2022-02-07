import React from 'react';
import LoadingIcon from '../assets/img/loading/LoadingIcon'
import Wrapper from '../components/wrapper/Wrapper'
import BgCircleContainer from '../components/wrapper/BgCircleContainer'
import {motion} from 'framer-motion'
import BgCircleLoading from '../components/wrapper/BgCircleLoading';

const LoadingScreen = () => {
  const smartlightArr = [...'smartlight']

  const slParent = {
    hidden: { 
      y:-20,
      x:-20,
      opacity:0
     },
    show: {
      opacity: 1,
      x:0,
      y:0,
      transition: {
        staggerChildren: 0.1,
        bounce:0.5,
        type:'spring',
      }
    }
  }
  const slChild = {
      hidden: {
        y:-200,
      x:-4,
         opacity:0 
        },
      show: { 
        x:0,
        y:0,
        opacity: 1 
      }
  }
  const coordsArr = ["-left-10 -top-10", "-right-24 top-0", "left-10 top-40"];

  return (
<Wrapper>
  <div className="w-10 h-10 rounded-full fixed left-1/2 top-1/2 -translate-1/2 keyframe "></div>
<BgCircleContainer>
        {coordsArr.map((circlepos, index) => (
          <BgCircleLoading key={index} coords={circlepos} />
          ))}
      </BgCircleContainer>
  <div className="flex justify-center flex-col items-center h-full w-full">

<div className='w-48 h-48 relative'>
  <div className="absolute -top-1 -left-2 right-0 bottom-0 flex justify-center items-center">
  <motion.div 
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:1, repeat:Infinity, repeatType:'reverse'}}
  className='w-10 h-10 rounded-full bg-yellow-400 blur-md'></motion.div>
  </div>
  <LoadingIcon />
  </div>
  <motion.div
  >

  <motion.div variants={slParent}
  initial="hidden"
  animate="show"
  className='flex text-3xl gap-1 text-white font-bold'
  >{smartlightArr.map((l,index)=><motion.h1 variants={slChild} key={index}>{l}</motion.h1>)}</motion.div>
  </motion.div>
  </div>
</Wrapper>
)
};

export default LoadingScreen;
