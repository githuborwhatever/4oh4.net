import React from 'react';
import { Link } from "react-router-dom";
import './MainNav.css';

function MainNav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li>
            <Link to="/projects">projects</Link>
            <ul>
                <li><Link to="/programs">programs</Link></li>
                <li><Link to="/tabletop">tabletop</Link></li>
                <li><Link to="/keyboards">keyboards</Link></li>
                <li><Link to="/models">3d models</Link></li>
            </ul>
        </li>
        <li><Link to="/hire">hire me</Link></li>
      </ul>
    </nav>
  );
}

export default MainNav;
