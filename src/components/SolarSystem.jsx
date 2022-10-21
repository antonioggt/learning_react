import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const hl = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ hl } />
        {Planets.map((e) => (
          <PlanetCard key={ e.name } planetName={ e.name } planetImage={ e.image } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
