import React,{useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../../AppContext'
import closeImg from './closeIcon.png'
import greenOnImg from './greenOn.png'

const Container = styled.div`
    display:flex;
    padding-top:10px;
    padding-bottom:6px;
    -webkit-box-shadow: 0 4px 6px -6px #222;
    -moz-box-shadow: 0 4px 6px -6px #222;
    box-shadow: 0 4px 6px -6px #222;
`
const Text = styled.div`
    text-align: left;
    display: inline;
    font-size: 15px;
    font-weight: 500;
    padding-top: 2px;
    margin-left: 8px;
`

const CloseButton = styled.button`
display:inline;
width: 24px;
background-image: url(${closeImg});
background-repeat: no-repeat;
background-size: 24px;
background-color: white;
border: 0;
padding-bottom:20px;
margin-left:117px;
`

const IconOn = styled.div`
padding-top: 2px;
display: inline;
width: 14px;
background-image: url(${greenOnImg});background-repeat: no-repeat;
background-size: 13px;
background-color: white;
margin-top: 7px;
margin-left: 7px;
`

function Header() {
    const [ , ,open,setOpen] = useContext(AppContext)

    const onClick = () => {
        setOpen(false)
    }

    return (
        <Container>
           <Text>gigaaa Al Assistant</Text>
           <IconOn />
            <CloseButton onClick={onClick}/>
        </Container>
    )
}

export default Header
