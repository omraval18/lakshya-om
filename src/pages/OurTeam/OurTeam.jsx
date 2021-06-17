import React, { useState } from 'react';
import './OurTeam.scss';
import Carousel from 'react-elastic-carousel';
import Cards from '../../components/Team-Cards/Cards';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Data = [
  {
    name: 'Deep Makadiya',
    roles: 'Front-end',
    url: 'https://picsum.photos/500',
    team: 'core-team',
  },
  {
    name: 'Om Raval',
    roles: 'UI/UX',
    url: 'https://picsum.photos/500',
    team: 'convener',
  },
  {
    name: 'Parth Thakkar',
    roles: 'Back-end',
    url: 'https://picsum.photos/500',
    team: 'developers',
  },
  {
    name: 'Vansh Prajapati',
    roles: 'Back-end',
    url: 'https://picsum.photos/500',
    team: 'convener',
  },
  {
    name: 'Jainam Shah',
    roles: 'Management',
    url: 'https://picsum.photos/500',
    team: 'heads',
  },
  {
    name: 'Ridham Diyora',
    roles: 'Back-end',
    url: 'https://picsum.photos/500',
    team: 'core-team',
  },
];

function OurTeam() {
  const handlePeople = (e) => {
    e.preventDefault();

    let category = e.target.value;

    if (category === 'convener') {
      const filtered = Data.filter((item) => item.team === 'convener');
      return Data === filtered;
    } else if (category === 'core-team') {
      const filtered = Data.filter((item) => item.team === 'core-team');
      return Data === filtered;
    } else if (category === 'heads') {
      const filtered = Data.filter((item) => item.team === 'heads');
      return Data === filtered;
    } else if (category === 'developers') {
      const filtered = Data.filter((item) => item.team === 'developers');
      return Data === filtered;
    }
  };

  return (
    <div className="container">
      <div className="page-wrapper">
        <div className="page-title">
          <div className="title-text">Our Team</div>
          {/* <div className="underline"></div> */}
        </div>
        <div className="team-category">
          <div
            value="convener"
            className="convener"
            onClick={() => handlePeople()}
          >
            Convener
          </div>
          <div value="heads" className="heads" onClick={() => handlePeople()}>
            Heads
          </div>
          <div
            value="core-team"
            className="core-team"
            onClick={() => handlePeople()}
          >
            Core Team
          </div>
          <div
            value="developers"
            className="developers"
            onClick={() => handlePeople()}
          >
            Developers
          </div>
        </div>
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {Data.map((item, index) => (
              <Cards
                key={index}
                name={item.name}
                role={item.roles}
                image={item.url}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
