import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content: center;
    padding-top:10px;
`
const Button = styled.button`
    border:0;
    display:inline;
    font-size: 13px;
    background-color: white;
    outline:none;
`
const Word = styled.div `
    font-size: 13px;
    color:gray;
    margin: 0 4px;
`

// passing value={3} (index 3 for SignUp) for rendering component SignUp
//passing value = 2/guest index for Continue as guest rendering

function SubLinks(props) {
    return (
        <Container>
            <Button onClick={props.onClick} value={3}>Sign Up</Button>
            <Word>or</Word>
            <Button onClick={props.onClick} value="2/guest">Continue as Guest</Button>
        </Container>
    )
}

export default SubLinks
