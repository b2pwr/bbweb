import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import { Tag } from 'antd'
import Topic from './Topic'
import Photo from './Photo'
import Project from './Project'
import Art from './Art'
import './css/Portfolio.css'
class Portfolio extends React.Component {
  render() {
    return <div>
        <div className="tagWrapper">
          <Tag>
            <Link to={`${this.props.match.url}/photo`}>Photo</Link>
          </Tag>
          <Tag>
            <Link to={`${this.props.match.url}/project`}>Project</Link>
          </Tag>
          <Tag>
            <Link to={`${this.props.match.url}/art`}>art</Link>
          </Tag>
        </div>
        <Route path="/portfolio/photo" component={Photo} />
        <Route path="/portfolio/project" component={Project} />
        <Route path="/portfolio/art" component={Art} />
      </div>;
  }
}

export default Portfolio;