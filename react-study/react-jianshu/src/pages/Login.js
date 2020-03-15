import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Input,Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const da = require('../config/dataBaseConfig')
const Login =()=>{
    const [userName,setUserName] = useState('')
    const [passWord,setPassWord] = useState('')
    const isSucceed = (user)=>{
      da.login(user,(err)=>{
        if(err) return console.log('err')
        else console.log("登录成功")
      })
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