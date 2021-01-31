import React from 'react'
import styled from 'styled-components'
import videoicon from './videoocall.png'
import voiceicon from './voicecall.png'

const Container = styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;
width:100%;
-webkit-box-shadow: 0 4px 6px -6px #222;
-moz-box-shadow: 0 4px 6px -6px #222;
`

const LinkItem = styled.a`
display:flex;
flex-direction: column;
flex-basis: 100%;
flex:1;
background-image: url(${props => props.video ? videoicon : voiceicon});background-repeat: no-repeat;
background-size: ${props => props.voice ? 18 : 23}px;
background-position:center;
width:100%;
height:25px;
`


function NavLinks() {
    return (
        <Container>
            <LinkItem video/>
            <LinkItem voice/>
        </Container>
    )
}

export default NavLinks
