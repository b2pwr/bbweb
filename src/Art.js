import React from 'react';
import './css/Art.css'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./art", false, /\.(png|jpe?g|svg)$/)
);

var resImages = [];
Object.keys(images).forEach(function(key) {
  resImages.push(<img className="item" src={images[key]} key={key} alt="p1" />);
});

class Topic extends React.Component {
    render () {
      return (
        <div className="masonry">
          {resImages}  
        </div>
      )
    }
}

export default Topic;