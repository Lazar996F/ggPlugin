import React,{ useContext } from 'react'
import {AppContext} from '../AppContext'
import StartConversation from './StartConversation/StartConversation'
import LoginContent from './LoginContent/LoginContent'
import SignUp from './SignUp/SignUp'
import Chat from './ChatBox/Chat'

function ContentRenderer() {

    const [pageIndex,] = useContext(AppContext)
    
        switch (pageIndex) {
            case '1':
                return <StartConversation />
            case '2':
                return <LoginContent />
            case '3':
                return <SignUp />
            case '2/guest':
                return <Chat />
            default:
                break;
        }
}

export default ContentRenderer

