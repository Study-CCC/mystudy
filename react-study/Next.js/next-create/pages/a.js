import Link from 'next/link'
import Router from 'next/router'
export default ()=>(
    <>
    <div>a</div>
    <button onClick={()=>{Router.push("/")}}>返回首页</button>
    </>
)