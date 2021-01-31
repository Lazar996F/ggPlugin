import React,{useContext} from 'react'
import styled from 'styled-components'
import image from './emojiPicture.png'
import MainButton from '../MainButton'
import SubLinks from './SubLinks'
import {AppContext} from '../../AppContext'

const Image = styled.div`
background-image: url(${image});
background-repeat: no-repeat;
background-size: 72px;
height: 93px;
background-position: center;
`
const Container = styled.div`
    padding-bottom: 20px;
`
const Title = styled.div `
    text-align:center;
    font-weight: 500;
`
const Subtitle = styled.div`
    text-align:center;
    font-size: 12px;
    padding-bottom:15px;
`
const Text = styled.div `
    text-align:center;
    font-size: 12px;
`

function LoginContent() {

        const [,setPageIndex] = useContext(AppContext)
    
        //set value (index) to 3 for rendering component SignUp
        const onClick = (e) => {
             setPageIndex(e.target.value)
        }

    return (
    <React.Fragment>
        <Container>
            <Image/>
            <Title>Talk to gigaaa Al Assistant</Title>
            <Subtitle>both via voice and text</Subtitle>
            <Text>Try an example of our Al Assistant,<br/>right now!</Text>
            </Container>
        <MainButton title="Log into gigaaa Al Assistant" value={3} onClick={onClick}/>
        <SubLinks onClick={onClick}/>
    </React.Fragment>
    )
}

export default LoginContent;
