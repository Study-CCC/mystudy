import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Top from '../components/common/Header'
import Articles from '../components/pages/Home/Content'
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <Layout>
                <Header style={{ padding: 0, height: '100%' }}>
                    <Top />
                </Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content style={{ minWidth: '800px' }}>
                        <Row>
                            <Col span={3}></Col>
                             <Col span={12}><Articles /></Col>
                             <Col span={6}></Col>
                             </Row>
                             </Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>);
    }
}

export default Home;