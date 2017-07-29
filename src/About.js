import React from 'react';
import { Card } from 'antd';
import ProfileImg from './image/profile.jpg';
import './css/About.css';

class About extends React.Component {
  render() {
    return (
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img alt="example" width="100%" src={ProfileImg} />
        </div>
        <div className="custom-card">
          <h3>B2Cheng / 鄭暉融</h3>
          <p>Front-End Developer</p>
        </div>
      </Card>
    )
  }
}

export default About;