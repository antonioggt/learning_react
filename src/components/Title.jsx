import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { headLine } = this.props;
    return (
      <h2>{ headLine }</h2>
    );
  }
}

export default Title;
