import React,{ createContext,useReducer } from 'react'

export const colorContext = createContext()

const reducer = (state,action)=>{
    switch(action.type){
        case "UPDATA_COLOR":
            return action.color
        default:
            return state
    }
}

export const Color = props=>{
    // console.log(props);
    const [color,dispatch] = useReducer(reducer,'blue')
    return (
        <colorContext.Provider value={{color,dispatch}}>
            {props.children}
        </colorContext.Provider>
    )
}