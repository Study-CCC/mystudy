import React from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Input, Menu, Button } from 'antd'
import '../../static/style/Header.css'
import { MenuFoldOutlined, DownloadOutlined } from '@ant-design/icons';
const { Search } = Input
const Header = () => {
    return (<div className='header'>
        <Row justify="center">
            <Col span={4}><img className="header-logo" src={require("../../static/icon/logo.png")} /></Col>
            <Col span={6}>
                <Menu  mode="horizontal">
                    <Menu.Item><MenuFoldOutlined />首页</Menu.Item>
                    <Menu.Item><DownloadOutlined />下载App</Menu.Item>
                </Menu>
                </Col>
                <Col span={6}>
                <Search
                enterButton
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 300 }}
                />
            </Col>
            <Col className="right" span={8}>
                <i></i>
                <Link to="/login">登录</Link>
                <Button type="primary" shape="round" size={'large'} className="register-btn" >
                    <Link to = "/register">注册</Link>
        </Button>
                <Button className="write-btn" type="primary" shape="round" size={'large'}>
                    写文章
        </Button>
            </Col>
        </Row>
    </div>)
}
export default Header