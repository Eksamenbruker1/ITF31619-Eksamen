import React, {useState,createContext} from 'react'

const initialState = "404";

export const GlobalContext = createContext({
    state:"",
    updateState: ()=>{},
});

const GlobalState = ( {children}) => {
    const [state,setState] = useState(initialState)
    const updateState = (title) => setState(title)
    
    return(
        <GlobalContext.Provider value={{state,updateState}}>
                {children} 
        </GlobalContext.Provider>
    )
}

export default GlobalState;