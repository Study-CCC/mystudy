import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Affix, Breadcrumb } from 'antd'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import  servicePath  from '../config/apiUrl'
import '../public/static/style/pages/detailed.css'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';const Detailed = () => {
  const renderer = new marked.Renderer();
  // renderer: 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式

  // gfm：启动类似Github样式的Markdown,填写true或者false
  
  // pedatic：只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
  
  // sanitize: 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
  
  // tables： 支持Github形式的表格，必须打开gfm选项
  
  // breaks: 支持Github换行符，必须打开gfm选项，填写true或者false
  
  // smartLists：优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
  
  // highlight: 高亮显示规则 ，这里我们将使用highlight.js来完成
  marked.setOptions({
    renderer: renderer,    
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(props.article_content)
  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">
                React实战视频教程-技术胖Blog开发(更新08集)
              </div>

              <div className="list-icon center">
                <span><Icon type="calendar" /> 2019-06-28</span>
                <span><Icon type="folder" /> 视频教程</span>
                <span><Icon type="fire" /> 5498人</span>
              </div>

              <div className="detailed-content" >
                <ReactMarkdown
                  source={markdown}
                  escapeHtml={false}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="article-menu"
                source={markdown}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />

    </>
  )
}
Detailed.getInitialProps = async(context)=>{

  console.log(context.query.id)
  let id =context.query.id
  const promise = new Promise((resolve)=>{

    axios(servicePath.getArticleById+id).then(
      (res)=>{
        // console.log(title)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}
export default Detailed