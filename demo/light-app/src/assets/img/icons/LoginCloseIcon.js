import * as React from "react"
import {motion}from 'framer-motion'
const LoginCloseIcon = (props) => (
  <motion.svg
  initial={{x:50}}
animate={{x:0}}
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 56 56"
    style={{
      enableBackground: "new 0 0 56 56",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        ".st1,.st2{fill:none;stroke-width:4;stroke-miterlimit:10}.st1{display:inline;stroke:#000}.st2{stroke:#ff9696}"
      }
    </style>
    <circle className="st2" cx={28} cy={28} r={26.5} />
    <path className="st2" d="m14.75 14.75 26.5 26.5M14.75 41.25l26.5-26.5" />
  </motion.svg>
)

export default LoginCloseIcon
