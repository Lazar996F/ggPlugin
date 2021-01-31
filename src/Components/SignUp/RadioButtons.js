import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 8px;
`
const CheckInput = styled.input`
    margin-right: 12px;
    margin-top: 6px;
    margin-bottom: 6px;
`
const Label = styled.label`
    font-size:13px;
    padding: 2px 18px;
`
function RadioButtons({handleChange}) {
    return (
    <Container class="control">
        <Label class="radio">
        <CheckInput type="radio" name="answer" value="phone" onChange={handleChange} />
            Phone number
        </Label>
        <Label class="radio">
        <CheckInput type="radio" name="answer" value="email" onChange={handleChange}/>
            E-mail
        </Label>
    </Container>
    )
}

export default RadioButtons
