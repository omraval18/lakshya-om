import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function SideBar({ clicked }) {
  return (
    <>
      <div className="sidebar">
        <div className="nav-close-wrapper">
          <ArrowForwardIosIcon
            className="nav-close"
            size="80"
            onClick={clicked}
          />
        </div>

        <div className="nav-links">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/events">
            <li>EVENTS</li>
          </Link>
          <Link to="/gallery">
            <li>GALLERY</li>
          </Link>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <Link to="/ourteam">
            <li>OUR TEAM</li>
          </Link>
          <Link to="/contact">
            <li>CONTACT US</li>
          </Link>
          -
        </div>
      </div>
    </>
  );
}

export default SideBar;
