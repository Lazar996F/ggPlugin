import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import ConversationBox from './ConversationBox'

const Container = styled.div`

`

const Small = styled.small`
    font-size: 8px;
    text-align:center;
    display:block;
    padding: 12px 35px;
    color: lightgrey;
`

const TEXT = "This conversation will be available on gigaaa Messenger, even after the chat is closed. To continue the conversation there, choose Open Messenger on the drop-down menu or go to the mobile app.";

function Chat() {
    return (
    <Container>
        <NavLinks/>
        <Small>{TEXT}</Small>
        <ConversationBox />
    </Container>
    )
}

export default Chat
