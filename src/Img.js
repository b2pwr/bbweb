import React from 'react'

class Img extends React.Component {      
  state = {
    hidden: true
  }  

  isLoaded() {
    this.setState({ hidden: false });
    if(this.props.isLoaded) {
      this.props.isLoaded();
    }
  }

  render() {
    return (
      <img onLoad={this.isLoaded.bind(this)} className={this.state.hidden? 'hidden': ''} className="item" src={this.props.src} alt={this.props.name} />
    );
  }
}

export default Img;