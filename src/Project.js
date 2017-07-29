import React from 'react';
import projectPATH from './project/proj1.png'
import { Card, Col, Row } from 'antd'
import './css/Project.css'

function importAll(r) {
  let projects = {};
  r.keys().map((item, index) => {
    projects[item.replace("./", "")] = r(item);
  });
  return projects;
}

const projects = importAll(
  require.context("./project", false, /\.(png|jpe?g|svg)$/)
);

class Project extends React.Component {
  render() {
    return <Row gutter={32}>
        <Col span={12}>
          <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <a href="https://drive.google.com/open?id=0B1zcwOkXgiCdMm5ULWpkbzYwVDQ">
              <div className="custom-image">
                <img alt="example" width="100%" src={projects["proj1.png"]} />
              </div>
              <div className="custom-card">
                <h3>城市延伸商品提案</h3>
                <p>色彩學專案</p>
              </div>
            </a>
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <a href="https://drive.google.com/open?id=0B1zcwOkXgiCdU1VSWV8zb2ZWajQ">
              <div className="custom-image">
                <img alt="example" width="100%" src={projects["proj2.png"]} />
              </div>
              <div className="custom-card">
                <h3>商業攝影期中報告</h3>
                <p>攝影大師介紹與仿拍</p>
              </div>
            </a>
          </Card>
        </Col>
      </Row>;
  }
}

export default Project;