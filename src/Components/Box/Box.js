import React,{useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../../AppContext'

const Container = styled.div`
    position: fixed;
    right: 20px;
    bottom: 78px;
    width: 320px;
    padding-bottom: 25px;
    border: 0px solid #1C6EA4;
    border-radius: 15px 15px 0px 15px;
    -webkit-box-shadow: -1px -4px 5px 0px rgba(108,98,246,1);
    -moz-box-shadow: -1px -4px 5px 0px rgba(108,98,246,1);
    box-shadow: -1px -4px 5px 0px rgba(108,98,246,1);
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
