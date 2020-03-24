import React, { Component } from 'react';
import {Row,Col} from 'antd'
import 'antd/dist/antd.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
             <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
        </div>);
    }
}
 
export default Header;