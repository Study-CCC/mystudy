import React, { useState, useEffect, useMemo } from 'react'
import Header from '../components/Home/Header'
import { Link } from 'react-router-dom'
import { Row, Col, List, Avatar } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Axios from 'axios';
import { isLogin } from '../store/createAction'
import store from '../store/index'
const Home = () => {
    const [listData, setListData] = useState([])
    const [commentList, setCommentList] = useState([])
    const [flag, setFlag] = useState(true)
    const [loginState, setLoginState] = useState(false)
    const state = useSelector(state=>state)
    useEffect(() => {
        console.log(state)
        // const islogin = isLogin()
        // state.dispatch(islogin)
        const fetch = async () => {
            const data = await Axios.get("http://localhost:8080/getlist")
            const commentData = await Axios.get("http://localhost:8080/recommend")
            setListData([...data.data])
            setCommentList([...commentData.data])
        }
        fetch()
    }, [])
    const IconText = ({ icon, text }) => (
        <span>
            {React.createElement(icon, { style: { marginRight: 8 } })}
            {text}
        </span>
    );
    return (<div>
        <Header />
        <Row justify="center">
            <Col className="left-cont" span={10}>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText icon={StarOutlined} text={item.star} key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text={item.comNum} key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text={item.diamond} key="list-vertical-message" />,
                            ]}
                            extra={
                                item.imgSrc ? (<img
                                    width={200}
                                    src={item.imgSrc}
                                />) : ''
                            }
                        >
                            <List.Item.Meta
                                title={<Link to={`/article/:${item.id}`}>{item.articleName}</Link>}
                            />
                            {item.articleCon}
                        </List.Item>
                    )}
                />
            </Col>
            <Col className="right-cont" span={4}>
                <List
                    itemLayout="horizontal"
                    dataSource={commentList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.iconImg} />}
                                title={<a href="https://ant.design">{item.authorName}</a>}
                                description={`写了${item.hadWrite}字,${item.like}喜欢`}
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    </div>)
}
export default Home