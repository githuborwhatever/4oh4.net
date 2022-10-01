import React from 'react';
import { Link } from "react-router-dom";
import './MainNav.css';

function MainNav() {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/">home</Link></li>
        <li>
            <Link to="/projects">projects</Link>
            <ul>
                {/* <li><Link to="/projects/programs">programs</Link></li> */}
                <li><Link to="/projects/tabletop">tabletop</Link></li>
                {/* <li><Link to="/projects/keyboards">keyboards</Link></li>
                <li><Link to="/projects/models">3d models</Link></li> */}
            </ul>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
