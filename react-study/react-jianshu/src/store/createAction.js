import axios from 'axios'
export const isLogin = () =>{
    console.log(123)
    return ()=>{
        axios.get("http://localhost:8080/getIsLogin",{params:{isLogin:1}}).then((res)=>{
            console.log(res)
        })
    }
}