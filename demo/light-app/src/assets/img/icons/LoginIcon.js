import * as React from "react"
import {motion} from 'framer-motion'
const LoginIcon = (props) => (
  <motion.svg
  initial={{y:50}}
  animate={{y:0}}
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
      {".st0{fill:none;stroke:#0A4DA2;stroke-width:4;stroke-miterlimit:10;}"}
    </style>
    <path
      className="st0"
      d="M2.8 19.93C6.21 9.19 16.27 1.41 28.14 1.41c14.68 0 26.59 11.91 26.59 26.59S42.82 54.59 28.14 54.59c-11.87 0-21.93-7.78-25.33-18.52"
    />
    <path
      className="st0"
      d="m21.01 13.99 12.35 13.77-12.35 14.25M1.28 28h31.94"
    />
  </motion.svg>
)

export default LoginIcon