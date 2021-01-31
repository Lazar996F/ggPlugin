import React from 'react'
import styled from 'styled-components'

const Button = styled.button `
  background-color:#5947ce;
	border-radius:28px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right:${props => props.title === "Sign Up" ? 105 : props.title === "Start Conversation" ? 53 : 15}px;
  padding-left:${props => props.title === "Sign Up" ? 105 : props.title === "Start Conversation" ? 53 : 15}px;
	text-decoration:none;
  text-shadow:0px 1px 0px #92a38f;
  border:0;
  outline: none;
  :active {background-color:blue}
  font-size: 13px;
`

function MainButton(props) {
    return (
        <Button value={props.value} onClick={props.onClick} title={props.title}>{props.title}</Button>
    )
}

export default MainButton
