import { createContext } from 'react/cjs/react.development'
import styled from 'styled-components'
import { ColorContext } from '../../../../../hooks/colorContext'

const {colorTheme} = createContext(ColorContext)

export const Input = styled.input`
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    background: ${colorTheme};
  }
  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    background: white;
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
  }


  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    background: white;
    border-radius: 100%;
    border: 0;
  }



  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${colorTheme};
    }
    &::-moz-range-thumb {
      background-color: ${colorTheme};
    }
    &::-ms-thumb {
      background-color: ${colorTheme};
    }
  }
  
  
  `
  export default Input