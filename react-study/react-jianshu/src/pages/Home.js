import React from 'react'
import Header from '../components/Home/Header'
import {Row,Col} from 'antd'
const Home = ()=>{
    return (<div>
        <Header />
        <Row justify="center">
            <Col className="left-cont" md={16} lg={18}>左侧</Col>
            <Col className="right-cont" md={4} lg={6}>右侧</Col>
        </Row>
    </div>)
}
export default Home