import React from 'react';
import { Row, Col } from 'antd';

class Topic extends React.Component {
  render() {
    return <div>
        <h3>{this.props.match.path}</h3>
        <Row type="flex" justify="center">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
        <Row>
          <Col span={6} offset={6}>col-6 col-offset-6</Col>
          <Col span={6} offset={6}>col-6 col-offset-6</Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>col-12 col-offset-6</Col>
        </Row>
      </div>;
  }
}

export default Topic;