import React from 'react'
import { Row, Col, Input, Menu, Button } from 'antd'
import '../../static/style/Header.css'
import { MenuFoldOutlined, DownloadOutlined } from '@ant-design/icons';
const { Search } = Input
const Header = () => {
    return (<div className='header'>
        <Row justify="center">
            <Col span={4}><img className="header-logo" src={require("../../static/icon/logo.png")} /></Col>
            <Col span={10}>
                <Menu mode="horizontal">
                    <Menu.Item><MenuFoldOutlined />首页</Menu.Item>
                    <Menu.Item><DownloadOutlined />下载App</Menu.Item>
                    <Search
                enterButton
                placeholder="搜索"
                onSearch={value => console.log(value)}
                style={{ width: 300 }}
            />
                </Menu>
            </Col>
            <Col span={8}>
                <i></i>
                <img className=" " src={require('../../static/icon/beta.png')} />
                <a>登录</a>
                <Button type="primary" shape="round" size={'large'} className="register-btn" >
                    注册
        </Button>
                <Button className="write-btn" type="primary" shape="round" size={'large'}>
                    写文章
        </Button>
            </Col>
        </Row>
    </div>)
}
export default Header