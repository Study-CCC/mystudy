import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Input,Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios'
const Login =()=>{
    const [userName,setUserName] = useState('')
    const [passWord,setPassWord] = useState('')
    const isSucceed = (user)=>{
      axios.get("http://localhost:8080/login",user).then()
    }
    return (<div style={{marginLeft:500,marginTop:200}} className="example-input">
    <Input onChange={val=>{setUserName(val)}} size="small" style={{width:200}} placeholder="small size" prefix={<UserOutlined />} />
    <br />
    <Input.Password onChange={val=>{setPassWord(val)}} size="large" style={{width:200}} placeholder="large Password" />
    <br />
    <Button onClick={()=>isSucceed({userName,password:passWord})}>登录</Button>
  </div>)
}
export default Login;