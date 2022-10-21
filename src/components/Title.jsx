import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headLine } = this.props;
    return (
      <h2>{headLine}</h2>
    );
  }
}

Title.propTypes = PropTypes.string.isRequired;

export default Title;
