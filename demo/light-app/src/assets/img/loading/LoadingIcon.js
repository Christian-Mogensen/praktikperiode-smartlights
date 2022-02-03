import * as React from "react"
import {motion} from 'framer-motion'
const LoadingIcon = (props) => {
  const rayParent = {
    hidden: { opacity: 1, 
      // scale:0.8 
    },
    show: {
      opacity: 1,
      // scale:1.2,
      transition: {
        staggerChildren: 0.5,
        repeatType: "reverse",
        repeat:Infinity,
        // duration:0.7
      }
    }
  }
  
const rayChild = {
  hidden: { opacity:0 },
  show: { opacity: 1 }
}
return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 352 368"
    style={{
      enableBackground: "new 0 0 352 368",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {".st0{fill:none;stroke:#fff;stroke-width:10;stroke-miterlimit:10}.rayClr{stroke:rgb(250, 204, 21);)}"}
    </style>
    <path className="st0" d="M-427.83 721.45h.5v.25h-.5z" id="Light" />
    <g 
    id="Ray">
      <path
        id="Screwbot"
        className="st0"
        d="M126.93 305.6c0-8.12 6.59-14.71 14.71-14.71h57.3c8.12 0 14.71 6.59 14.71 14.71 0 8.12-6.59 14.71-14.71 14.71h-57.3c-8.12 0-14.71-6.58-14.71-14.71z"
      />
      <path
        id="Screwtop"
        className="st0"
        d="M126.93 276.18c0-8.12 6.59-14.71 14.71-14.71h57.3c8.12 0 14.71 6.59 14.71 14.71 0 8.12-6.59 14.71-14.71 14.71h-57.3c-8.12 0-14.71-6.59-14.71-14.71z"
      />
      <path
        id="Glass"
        className="st0 classFill"
        d="M246.94 170.77c0 31.79-19.36 59.06-46.92 70.67v20.02h-59.45v-20.02c-27.58-11.6-46.94-38.87-46.94-70.67 0-42.34 34.32-76.65 76.65-76.65 42.34 0 76.66 34.31 76.66 76.65z"
      />
      <path
        id="Base"
        className=" fill-blue-400 "
        d="M141.64 325.33c-.9 0-1.77-.06-2.62-.15.91 10.36 14.54 18.58 31.27 18.58s30.36-8.23 31.27-18.58c-.85.1-1.73.15-2.62.15h-57.3z"
      />
      <motion.g
     variants={rayParent}
     initial="hidden"
     animate="show"
    transition={{duration:1, repeat:Infinity, ease:"circInOut"}}
      >

      <motion.path 
      variants={rayChild}
      id="Right-m-top" className="st0 rayClr" d="m302.86 91.02-42.02 24.23" />
      <motion.path 
      variants={rayChild}
      id="Left-bot" className="st0 rayClr" d="m79.74 219.7-42.03 24.23" />
      <motion.path 
      variants={rayChild}
      id="Left-m-top" className="st0 rayClr" d="M79.74 115.25 37.71 91.02" />
      <motion.path 
      variants={rayChild}
      id="Right-bot" className="st0 rayClr" d="m302.86 243.93-42.01-24.23" />
      <motion.path 
      variants={rayChild}
      id="Top-m" className="st0 rayClr" d="M170.3 62.94V24.25" />
      <motion.path 
      variants={rayChild}
      id="Left-top-1" className="st0 rayClr" d="M116.11 78.09 93.64 41.02" />
      <motion.path 
      variants={rayChild}
      id="Right-top-1" className="st0 rayClr" d="m246.95 41.02-22.47 37.07" />
      <motion.path 
      variants={rayChild}
      id="Left-m" className="st0 rayClr" d="M65.77 167.48h-55.3" />
      <motion.path 
      variants={rayChild}
      id="Right-m" className="st0 rayClr" d="M330.1 167.48h-55.28" />
      </motion.g>
    </g>
  </svg>
)
}
export default LoadingIcon
