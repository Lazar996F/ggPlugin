import React,{useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from './AppContext'
import img from './fingerprint.jpeg'


const Button = styled.button`
position: fixed;
right: 15px;
bottom: 6px;
background-image: url(${img});
background-size: 57px;
width: 57px;
height: 57px;
background-repeat: no-repeat;
border: 0;
outline:none;
`

function FingerPrintButton() {
    const [ , ,open,setOpen] = useContext(AppContext)
    const onClick = () => {
        setOpen(true)
    }
    return (
        <Button open={open} onClick={onClick}/>
    )
}

export default FingerPrintButton
