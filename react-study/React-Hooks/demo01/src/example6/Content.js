import React,{useContext} from 'react'
import {colorContext} from './color'

function Content(){    
    const {color} = useContext(colorContext)
    return(
        <h1 style={{color:color}}>我是蓝色</h1>
    )
}
export default Content;