import React, { Component } from 'react';
import { Menu, Row, Col,Button,Input  } from 'antd';
import '../../static/header.css'
const { Search } = Input;
class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail'
        }
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (<div className="header">
            <Row align="middle">
                <Col span={4} >
                    <img width={70} src="/img/bokeyuan.png" />
                </Col>
                <Col span={8}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">
                            首页
                        </Menu.Item>
                        <Menu.Item key="app" >
                            写博客
                        </Menu.Item>
                        <Menu.Item key="alipay">
                                Navigation Four - Link
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={8}><Search className="input" style={{width: '300px'}} placeholder="input search text" onSearch={value => console.log(value)} enterButton /></Col>
                <Col  span={4}><Button style={{float:'left'}} type="primary" shape="round" size='large'>
                    登录
        </Button>
        <Button style={{float:'right',marginRight:'80px'}} type="primary" shape="round" size='large'>
                   注册
        </Button></Col>
            </Row>
        </div>);
    }
}

export default header;