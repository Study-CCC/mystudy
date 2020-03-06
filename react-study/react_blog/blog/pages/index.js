import React from 'react'
import Head from 'next/head'
import {Row,Col} from 'antd'
import Header from '../components/Header'
import "../public/static/style/pages/comm.css"
import List from './list'
import "../public/static/style/pages/index.css"
import Author from '../components/Author'
import Advert from '../components/Advert'
const Home = () => (
  <div className="container">
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        <List />
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
       <Author />
       <Advert />
      </Col>
    </Row>
    </div>
)
export default Home
