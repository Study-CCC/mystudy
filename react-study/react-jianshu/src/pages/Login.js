import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios'
const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const isSucceed = () => {
    const user = {userName,password}
    // console.log(user)
    axios.post("http://localhost:8080/login",{params:user}).then(res=>{
      // console.log(res)
      if(res.data){
        console.log("登录成功")
      }
      else console.log("登录失败")
    })
  }
  return (<div style={{ marginLeft: 500, marginTop: 200 }} className="example-input">
    <Input onChange={e => { setUserName(e.target.value) }} size="small" style={{ width: 200 }} placeholder="small size" prefix={<UserOutlined />} />
    <br />
    <Input.Password onChange={e => { setPassword(e.target.value)}} size="large" style={{ width: 200 }} placeholder="large Password" />
    <br />
    <Button onClick={() => isSucceed()}>登录</Button>
  </div>)
}
export default Login;