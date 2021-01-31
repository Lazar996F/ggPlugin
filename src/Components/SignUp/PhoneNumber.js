import React from 'react'
import styled from 'styled-components'


const Container = styled.div `

`


const Row = styled.div`
    display:flex;
    padding: 10px 10px;
`

const Label = styled.form`
    display:flex;
    font-size:13px;
    justify-content:start;
`

const InputPrefix = styled.input`
    border:0;
    border-bottom:1px solid #00000034;
    outline: none;
    display:flex;
    width:78%;
`

const InputNumber = styled.input`
    border:0;
    border-bottom:1px solid #00000034;
    outline: none;
    display:flex;
    justify-content:start;
`

const Col = styled.div`
    width: ${props => props.size || 100}%;
`

const LabelCode = styled.form`
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

function PhoneNumber() {
    return (
    <Container>
    <Row>
    <Col size={20}>
        <Label type="number">Prefix</Label>
        <InputPrefix/>
    </Col>
    <Col size={80}>
    <Label>Phone number</Label>  
    <InputNumber type="number"/>  
    </Col>
    </Row>
    <LabelCode>Verification code</LabelCode>
    <Input />
    </Container>
    )
}

export default PhoneNumber
