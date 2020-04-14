import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.id);
    // console.log(this.props.id);
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img
        src={src}
        alt=""
        className="gif"
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
