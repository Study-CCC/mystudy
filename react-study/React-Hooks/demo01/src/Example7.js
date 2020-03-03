import React,{useState,useMemo,useRef} from 'react'
function Example7(){
    const [Count,setCount] = useState(0)
    const [Num,setNum] = useState(100)
    return(
        <>
        <button onClick={()=>{setCount(Count+1)}}>count+1</button>
        <button onClick={()=>{setNum(Num+1)}}>num+1</button>
    <Content name={Count}>{Num}</Content>
        </>
    ) 
}
function Content({name,children}){
    function CountChange(name){
        console.log('count改变了');
    return (name)
    }
    const CountChan = useMemo(()=>CountChange(name),[name])    //当name变化时才会触发函数

    return (
        <div>
            <div>{CountChan}</div>
            <h2>{children}</h2>
        </div>
    )
}
export default Example7