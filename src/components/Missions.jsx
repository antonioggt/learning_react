import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    const hl = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ hl } />
      </div>
    );
  }
}

export default Missions;
