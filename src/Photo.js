import React from 'react'
import './css/Photo.css'

class Img extends React.Component {
  state = {
    hidden: true
  }

  isLoaded() {
    console.log('loaded')
    this.setState({ hidden: false });
  }

  render() {
    return (
      <img onLoad={this.isLoaded.bind(this)} className={this.state.hidden? 'hidden': ''} className="item" src={this.props.src} alt={this.props.name} />
    );
  }
}

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
  render() {
    return (
      <div className="masonry">
        {Object.keys(images).map(function(key, id) {
          return <Img src={images[key]} name={key} key={id} />;
        })}
      </div>
    );
  }
}

export default Photo;