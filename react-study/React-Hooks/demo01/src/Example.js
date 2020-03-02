import React, { useState,useEffect } from 'react'

function Example() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`you click ${count}次`);
        
    })
    return (
        <div><p>当前次数为{count}</p>
            <button onClick={()=>{setCount(count + 1)}}>点击增加</button></div>
    )
}
export default Example