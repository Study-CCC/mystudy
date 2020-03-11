import React from 'react'
import { Row, Col,Input,Menu } from 'antd'
import sv from '../../static/icon/beta.png'
import '../../static/style/Header.css'
import { MenuFoldOutlined, DownloadOutlined } from '@ant-design/icons';
const { Search} = Input
const Header = () => {
    return (<div className='header'>
        <Row justify="center">
            <Col span={4}><img src={sv} /></Col>
            <Col span={4}>
                <Menu mode="horizontal">
                    <Menu.Item><MenuFoldOutlined />首页</Menu.Item>
                    <Menu.Item><DownloadOutlined />下载App</Menu.Item>
                </Menu>
                </Col>
            <Col span={6}><Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            /></Col>
            <Col span={8}>
                <i></i>
                <img src="../../static/icon/beta.png" />
                <a>登录</a>
            </Col>
        </Row>
     </div>)
}
export default Header