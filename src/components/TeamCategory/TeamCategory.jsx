import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import Cards from '../../components/Team-Cards/Cards';
import './TeamCategory.scss';
import TabPanel from '../Tab-Panel/TabPanel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
];

const Data = [
  {
    name: 'Deep Makadiya',
    roles: 'Front-end',
    url: 'https://picsum.photos/500',
    team: 'heads',
  },
  {
    name: 'Om Raval',
    roles: 'UI/UX',
    url: 'https://picsum.photos/500',
    team: 'heads',
  },
  {
    name: 'Parth Thakkar',
    roles: 'Back-end',
    url: 'https://picsum.photos/500',
    team: 'heads',
  },
  {
    name: 'Vansh Prajapati',
    roles: 'Back-end',
    url: 'https://picsum.photos/500',
    team: 'heads',
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
    team: 'heads',
  },
  {
    name: 'Darshan Shah',
    roles: 'Back-end',
    url: 'https://picsum.photos/500',
    team: 'heads',
  },
];

function TeamCategory() {
  const [value, setValue] = useState();
  const [menuItem, setMenuItem] = useState(Data);

  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div>
      <div className="team-category">
        <Tabs value={value} onChange={handleTabs} className="tabs-wrapper">
          <Tab label="Convener" />
          <Tab label="Heads" />
          <Tab label="Core-Team" />
          <Tab label="Developers" />
        </Tabs>
        <div className="cards-wrapper">
          <TabPanel value={value} index={0} className="convener">
            <div>
              <Carousel breakPoints={breakPoints}>
                {menuItem
                  .filter((item) => item.team === 'convener')
                  .map((item, index) => (
                    <Cards
                      key={index}
                      name={item.name}
                      role={item.roles}
                      image={item.url}
                    />
                  ))}
              </Carousel>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} className="heads">
            <div>
              <Carousel breakPoints={breakPoints}>
                {menuItem
                  .filter((item) => item.team === 'heads')
                  .map((item, index) => (
                    <Cards
                      key={index}
                      name={item.name}
                      role={item.roles}
                      image={item.url}
                    />
                  ))}
              </Carousel>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} className="core-team">
            <div>
              <Carousel breakPoints={breakPoints}>
                {menuItem
                  .filter((item) => item.team === 'core-team')
                  .map((item, index) => (
                    <Cards
                      key={index}
                      name={item.name}
                      role={item.roles}
                      image={item.url}
                    />
                  ))}
              </Carousel>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} className="developers">
            <div>
              <Carousel breakPoints={breakPoints}>
                {menuItem
                  .filter((item) => item.team === 'developers')
                  .map((item, index) => (
                    <Cards
                      key={index}
                      name={item.name}
                      role={item.roles}
                      image={item.url}
                    />
                  ))}
              </Carousel>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default TeamCategory;
