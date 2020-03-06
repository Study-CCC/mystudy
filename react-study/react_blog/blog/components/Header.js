import React from 'react'
import {Row,Col,Menu,Icon} from 'antd'
import '../public/static/style/components/header.css'
import {HomeOutlined,YoutubeOutlined,SmileOutlined} from '@ant-design/icons'    //从4.0开始antd不再内置icon
const Header=()=>(
    <div className="Header">
        <Row justify="center">
        <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">技术胖</span>
            <span className="header-txt">专注前端开发,每年100集免费视频。</span>
        </Col>
        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
      <Menu mode="horizontal">
          <Menu.Item key="home"><HomeOutlined />博客首页</Menu.Item>
          <Menu.Item key="video"><YoutubeOutlined />视频教程</Menu.Item>
          <Menu.Item key="life"><SmileOutlined />逼逼叨</Menu.Item>
      </Menu>
      </Col>
    </Row>
    </div>
)

export default Header