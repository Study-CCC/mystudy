import React,{useState} from 'react'
import { Input,Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Axios from 'axios';
const Register =()=>{
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [again,setAgain] = useState('')
  const register = ()=>{
    if(password!=again){return alert("错误")}
    else{
      const user = {userName,password}
      Axios.post("http://localhost:8080/register",{params:user}).then((res)=>{
      if(res){
        console.log("注册成功")
      }
      else console.log("注册失败")
      })
    }
  }
return (<div style={{marginLeft:500,marginTop:200}} className="example-input">
    <Input onChange={e => { setUserName(e.target.value) }} size="small" style={{width:200}} placeholder="small size" prefix={<UserOutlined />} />
    <br />
    <Input.Password onChange={e => { setPassword(e.target.value) }} size="large" style={{width:200}} placeholder="large Password" />
    <br />
    <Input.Password onChange={e => { setAgain(e.target.value) }} size="large" style={{width:200}} placeholder="再确定一遍" />
    <br />
    <Button onClick={()=>{register()}}>注册</Button>
  </div>
)}
export default Register