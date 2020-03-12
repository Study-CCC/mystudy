import React from 'react'
import { Input,Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const Login =()=>(
    <div style={{marginLeft:500,marginTop:200}} className="example-input">
    <Input size="small" style={{width:200}} placeholder="small size" prefix={<UserOutlined />} />
    <br />
    <Input.Password size="large" style={{width:200}} placeholder="large Password" />
    <br />
    <Button>登录</Button>
  </div>
)
export default Login;