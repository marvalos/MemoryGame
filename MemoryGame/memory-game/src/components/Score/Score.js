import React, { Component } from "react";

class Score extends Component {
    render() {
      return (
        <div className="score" score={this.props.score} topScore={this.props.topScore}>
          <p>Score</p>
        </div>
      )
    }
  }
  
export default Score;