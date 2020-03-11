import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'antd'
import Header from '../components/Header'
import "../public/static/style/pages/comm.css"
import List from './list'
import "../public/static/style/pages/index.css"
import Author from '../components/Author'
import Advert from '../components/Advert'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
const Home = ({ data }) => {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List data={data} />
          <div className="list-title">
            <Link href={{ pathname: '/detailed', query: { id: data.id } }}>
              <a>{data.title}</a>
            </Link>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
    </div>
  )
}
Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default Home
