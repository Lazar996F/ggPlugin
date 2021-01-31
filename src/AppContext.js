import React,{useState,createContext} from 'react'

export const AppContext = createContext();

export const AppProvider = props => {

    const [pageIndex,setPageIndex] = useState('1')
    const [open,setOpen] = useState(false)
    return (
        <AppContext.Provider value={[pageIndex,setPageIndex,open,setOpen]}>
            {props.children}
        </AppContext.Provider>
    )
}
