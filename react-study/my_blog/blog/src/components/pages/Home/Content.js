import React,{Component} from 'react';
import { List, Avatar } from 'antd';
import '../../../static/content.css'
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: [{ title: "两瓶饮料", author: "麦田大豆", authorImg: "https://upload.jianshu.io/users/upload_avatars/10934411/2b95aa67-88ea-4ad1-b069-5f784b074086.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp", article: "父亲常年在外地打工，有一次，父亲回家，特意给儿子带了礼物，是两瓶饮料。儿子迫不及待地拧开瓶盖，咕咚就一大口父亲赶紧问，好喝吗？儿子嘴里还含着饮料，说不出话，只好含含糊糊的点头。父亲开心的笑了，儿子忽然问他，爸，你喝过吗？父亲顿时扬起了眉毛，那当然，我在工地上干活儿干累了，就买它当水喝。儿子再没说什么。若干年后，儿子在城里安了家，父亲却查出了癌症。儿子说，爸，你想吃点儿什么尽管说，我给您买去。父亲想了想，说，我只想尝一种饮料，就是那年夏天我从城里给你带回来的那种。儿子有点意外，但没说什么，转身就下楼扛了两箱回来。儿子帮父亲拧开瓶盖，父亲接过来，刚喝了一口，忽然就皱起了眉头，用手指着饮料，郑重其事的告诉儿子，你买到假货了。儿子说，不可能，我在熟人店里买的。父亲说，不信你尝尝，这饮料掺水了！儿子扑通跪下，眼泪刷的就下来了，爸，矿泉水就是这个味儿啊……" },
            { title: "两瓶饮料", author: "麦田大豆", authorImg: "https://upload.jianshu.io/users/upload_avatars/10934411/2b95aa67-88ea-4ad1-b069-5f784b074086.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp", article: "父亲常年在外地打工，有一次，父亲回家，特意给儿子带了礼物，是两瓶饮料。儿子迫不及待地拧开瓶盖，咕咚就一大口父亲赶紧问，好喝吗？儿子嘴里还含着饮料，说不出话，只好含含糊糊的点头。父亲开心的笑了，儿子忽然问他，爸，你喝过吗？父亲顿时扬起了眉毛，那当然，我在工地上干活儿干累了，就买它当水喝。儿子再没说什么。若干年后，儿子在城里安了家，父亲却查出了癌症。儿子说，爸，你想吃点儿什么尽管说，我给您买去。父亲想了想，说，我只想尝一种饮料，就是那年夏天我从城里给你带回来的那种。儿子有点意外，但没说什么，转身就下楼扛了两箱回来。儿子帮父亲拧开瓶盖，父亲接过来，刚喝了一口，忽然就皱起了眉头，用手指着饮料，郑重其事的告诉儿子，你买到假货了。儿子说，不可能，我在熟人店里买的。父亲说，不信你尝尝，这饮料掺水了！儿子扑通跪下，眼泪刷的就下来了，爸，矿泉水就是这个味儿啊……" },
            { title: "两瓶饮料", author: "麦田大豆", authorImg: "https://upload.jianshu.io/users/upload_avatars/10934411/2b95aa67-88ea-4ad1-b069-5f784b074086.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp", article: "父亲常年在外地打工，有一次，父亲回家，特意给儿子带了礼物，是两瓶饮料。儿子迫不及待地拧开瓶盖，咕咚就一大口父亲赶紧问，好喝吗？儿子嘴里还含着饮料，说不出话，只好含含糊糊的点头。父亲开心的笑了，儿子忽然问他，爸，你喝过吗？父亲顿时扬起了眉毛，那当然，我在工地上干活儿干累了，就买它当水喝。儿子再没说什么。若干年后，儿子在城里安了家，父亲却查出了癌症。儿子说，爸，你想吃点儿什么尽管说，我给您买去。父亲想了想，说，我只想尝一种饮料，就是那年夏天我从城里给你带回来的那种。儿子有点意外，但没说什么，转身就下楼扛了两箱回来。儿子帮父亲拧开瓶盖，父亲接过来，刚喝了一口，忽然就皱起了眉头，用手指着饮料，郑重其事的告诉儿子，你买到假货了。儿子说，不可能，我在熟人店里买的。父亲说，不信你尝尝，这饮料掺水了！儿子扑通跪下，眼泪刷的就下来了，爸，矿泉水就是这个味儿啊……" }],
        }
    }
    render() {
        return (<div>
            <List
                itemLayout="horizontal"
                dataSource={this.state.articleList}
                renderItem={item => (
                    <List.Item className="article-con">
                        <List.Item.Meta
                            avatar={<Avatar src={item.authorImg} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.article}
                        />
                    </List.Item>)} />
        </div>);
    }
}
 
export default Content;