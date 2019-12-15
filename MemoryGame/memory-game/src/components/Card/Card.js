import React, { Component } from "react";
import "./style.css"

class Card extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.onClick}>
        <img src={this.props.image} alt=""/>
      </div>
    )
  }
}

export default Card;