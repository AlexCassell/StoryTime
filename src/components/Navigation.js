import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../css/App.css';

const Navigation = () => {
  return (
    <div>
      <Nav className="topNavigation">
        {/* <div className="topNavigation__items"><Link to="/admin/" className="Nav-link">Admin</Link></div> */}
        <div className="topNavigation__items"><Link to="/random/" className="Nav-link">Random</Link></div>
        <div className="topNavigation__items"><Link to="/story/" className="Nav-link">Your Story</Link></div>
        <div className="topNavigation__items"><Link to="/" className="Nav-link">Create</Link></div>
      </Nav>
    </div>
  );
};
//logout will be a variable
export default Navigation;