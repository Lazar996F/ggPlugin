import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    padding: 10px 6px;
`
const Label = styled.form`
    font-size:13px;
    font-weight:500;
    text-align:left;
    padding-left:8px;
    padding-top:10px;
`
const Input = styled.input`
    border:0;
    border-bottom:1px solid #00000034;
    width:90%;
    outline: none;
`

function Email() {
    return (
        <Container>
            <Label>E-mail</Label>
            <Input type="email"/>
            <Label>Password</Label>
            <Input type="password" />
            <Label>Confirm password</Label>
            <Input type="password"/>
        </Container>
    )
}

export default Email
