import React,{useContext} from 'react'
import {AppContext} from '../AppContext'
import StartConversation from './StartConversation/StartConversation'
import LoginContent from './LoginContent/LoginContent'
import SignUp from './SignUp/SignUp'

function ContentRenderer() {

    const [pageIndex,] = useContext(AppContext)

    return (
    <React.Fragment>
       {pageIndex === '1' && <StartConversation /> }
       {pageIndex === '2' && <LoginContent /> }
       {pageIndex === '3' && <SignUp />}
    </React.Fragment>
    )
}

export default ContentRenderer
