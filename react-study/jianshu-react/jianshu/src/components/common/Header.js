import React, { Component } from 'react';
import { Menu, Row, Col,Button,Input  } from 'antd';
import '../../static/header.css'
import '../../static/iconfont/iconfont.css'
const { Search } = Input;
class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail'
        }
    }
    handleClick = e => {
        
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (<div className="header">
            <Row align="middle">
                <Col span={4} >
                    <img width={80} src="/jian_img/nav-logo.png" />
                </Col>
                <Col span={8}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">
                            <i className='menu-icon iconfont icon-zhinanzhen'></i>首页
                        </Menu.Item>
                        <Menu.Item key="app" >
                            <i className='menu-icon iconfont icon-ai231'></i>下载APP
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={8}><Search className="input" style={{width: '300px'}} placeholder="input search text" onSearch={value => console.log(value)} enterButton /></Col>
                <Col  span={4}><Button ghost={true} style={{float:'left',border:'1px solid rgba(236,97,73,.7)',color:'rgba(236,97,73,.7)'}} type="primary" shape="round" size='large'>
                注册
        </Button>
        <Button style={{float:'right',marginRight:'80px',backgroundColor:'#ea6f5a',border:'1px solid rgba(236,97,73,.7)'}} type="primary" shape="round" size='large'>
                   <i className="icon-yumaobi iconfont"></i>写文章
        </Button></Col>
            </Row>
        </div>);
    }
}

export default header;