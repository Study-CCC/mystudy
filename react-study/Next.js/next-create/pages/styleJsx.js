import {useState} from 'react'

function styleJsx(){
    const [color,setColor] = useState('blue')
    return (
        <>
        <div>abcdef</div>
        <button onClick={()=>{setColor(color=='blue'?'yellow':'blue')}}>切换</button>
        <style jsx>
            {
                `
                div{color:${color}}
                `
            }
        </style>
        </>
    )
}
export default styleJsx