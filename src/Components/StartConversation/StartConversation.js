import React,{useContext} from 'react'
import styled from 'styled-components'
import MainButton from '../MainButton'
import {AppContext} from '../../AppContext'


const Text = styled.div`
    text-align:center;
    font-size: 13px;
`

const Container = styled.div`
    padding-bottom: 25px;
    padding-top: 25px;
`
 
function StartConversation() {

    const [,setPageIndex] = useContext(AppContext)
 //set value (index) to 2 for rendering component LoginContent
    const onClick = (e) => {
         setPageIndex(e.target.value)
    }

    return (
        <React.Fragment>
            <Container>
                <Text>Hi there, I'm gigaa Al Assistant!</Text>
                <Text>I'm there to help you find what you're looking for.</Text>
            </Container>
            <MainButton title="Start Conversation" value={2} onClick={onClick} />
        </React.Fragment>
    )
}

export default StartConversation
