import React,{useState,useEffect} from 'react'
import Header from '../components/Home/Header'
import {Link} from 'react-router-dom'
import { Row, Col, List, Avatar } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Axios from 'axios';
const Home = () => {
    const [listData,setListData] = useState([])
    useEffect(async()=>{
        console.log(123)
      const data = await Axios.get("http://localhost:8080/getlist")
      setListData(data.data)
    })
   
    // const listData = [{
    //     articleName: '敬畏自然',
    //     articleCon: '武汉新型冠状病毒产生的疫情牵动着全国每一个家庭，让整个国家陷入一场危~难之中。 新型病毒到底来源于何方，目前尚不能盖~棺定论，不过野生动物携带这...',
    //     comNum: '131',
    //     star: '423',
    //     fare: '123',
    //     diamond: '123',
    //     author: '放下皆得',
    //     imgSrc: 'https://upload-images.jianshu.io/upload_images/10666569-dc8b62578468db31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    //     id: 0
    // }, {
    //     articleName: '疫情下的穷人，活着已经很不容易了',
    //     articleCon: '今天刷公众号，看到一篇文章，写的是疫情下穷人的心酸。看了后我感触很多。 文章中提到了一个案例。卖糖葫芦的老大爷，因为疫情封了村，村里的街道上没有...',
    //     comNum: '88',
    //     star: '545',
    //     fare: '4',
    //     diamond: '34',
    //     author: '华盛华',
    //     imgSrc: null,
    //     id: 1
    // }];
    const commentList = [{
        authorName: '董克平日记',
        hadWrite: '877393',
        like: 3128,
        iconImg: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        id: 0
    },
    {
        authorName: '梅拾璎',
        hadWrite: '273969',
        like: '3128',
        iconImg: 'https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        id: 1
    }]

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