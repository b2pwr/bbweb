import React from 'react'
import Img from './Img'
import { Spin } from 'antd'
import './css/Photo.css'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./photo", false, /\.(png|jpe?g|svg)$/)
);

class Photo extends React.Component {
  state = {
    done: false,
    cnt: 0
  }  

  isDone() {
    this.state.cnt++;
    if(document.getElementsByClassName("masonry")[0].children.length) {
      this.setState({done: true});
    }
  }

  render() {
    return (
      <Spin size="large" spinning={!this.state.done}>
      <div className="masonry">
        {Object.keys(images).map((key, id) => {
          return <Img src={images[key]} name={key} key={id} isLoaded={ this.isDone.bind(this) } />;
        })}
      </div>
      </Spin>
    );
  }
}

export default Photo;