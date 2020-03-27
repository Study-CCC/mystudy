import React,{Component} from "react";
import { Layout, Form, Input, Button, Checkbox } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };}
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <Layout>
                <Header>注册页面</Header>
                <Content> <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={Demo.onFinish}
                    onFinishFailed={Demo.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                    </Form.Item>
                </Form></Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>);
    }
}

export default Register;