import React,{useContext} from 'react'
import {colorContext} from './color'
function Button(){
    const {dispatch} = useContext(colorContext)
    return (
        <div>
            <button onClick={()=>{dispatch({type:'UPDATA_COLOR',color:'yellow'})}}>黄色</button>
            <button onClick={()=>{dispatch({type:'UPDATA_COLOR',color:'green'})}}>绿色</button>
        </div>
    )
}
export default Button