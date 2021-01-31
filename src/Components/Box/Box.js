import React,{useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../../AppContext'

const Container = styled.div`
    position: fixed;
    right: 18px;
    bottom: 78px;
    width: 320px;
    padding-bottom: 25px;
    border: 0px solid #1C6EA4;
    border-radius: 20px 20px 0px 20px;
    -webkit-box-shadow: -8px 5px 17px 5px rgba(192,192,193,0.49); 
    box-shadow: -8px 5px 17px 5px rgba(192,192,193,0.49);
    display: ${props => !props.open ? "none" : "block"}
    `
    
function Box({children}) {    
    const [ , ,open,setOpen ] = useContext(AppContext)
    return (
    <Container open={open}>
        {children}
    </Container>
    )
}

export default Box
