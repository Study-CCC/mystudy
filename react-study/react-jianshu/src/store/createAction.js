import axios from 'axios'
export const isLogin = () =>{
    return (dispatch)=> {axios.get("http://localhost:8080/getIsLogin",{params:{isLogin:1}}).then((res)=>{
        const data = res.data
        // console.log(data)
        dispatch(data,{type:"getData"})
    })}
}