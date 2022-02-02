import { useContext } from 'react'
import Input from './InputStyle'
import { ColorContext } from '../../../../../hooks/colorContext'

const InputComp = ({type,min,max,step,value, onChange}) => {
    const { alphaValue, setAlphaValue} = useContext(ColorContext)
    
    
    return (<Input
        type={type}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        />)
}
export default InputComp