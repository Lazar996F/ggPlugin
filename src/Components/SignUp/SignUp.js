import React,{useState} from 'react'
import styled from 'styled-components'
import RadioButtons from './RadioButtons'
import PhoneNumber  from './PhoneNumber'
import MainButton from '../MainButton'
import Email from './Email'
const subText = "By clicking Sign Up, you agree to our Terms and Conditions that you have read and accepted our Data Protection Policy";

const Small = styled.small`
    font-size: 8px;
    text-align:center;
    display:block;
    padding: 12px 35px;
    color: lightgrey;
`
const Container = styled.div`
    padding:15px 30px;
`
const Label = styled.form`
    font-size:13px;
    font-weight:500;
    text-align:left;
    padding-left:8px;
`

const Input = styled.input`
    border:0;
    border-bottom:1px solid #00000034;
    width:90%;
    outline: none;
`
function SignUp() {
const [option,setOption] = useState('phone')

    const handleChange = (e) => {
        setOption(e.target.value)
    }

    return (
     <React.Fragment>
        <Container>
            <Label>How can I call you?</Label>
            <Input />
            <RadioButtons handleChange={handleChange}/>
             {option === 'phone' && <PhoneNumber />}
             {option ==='email' && <Email/> }
        </Container>
        <MainButton title="Sign Up"/>
        <Small>
            {subText}
        </Small>
     </React.Fragment>
     )
}

export default SignUp
