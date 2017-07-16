import React from 'react';
import {IndexLink, Link} from "react-router";

import './Navigation.css';


export const Navigation = () =>
  <ul className="nav nav-pills nav-stacked navigation">
    <li>
      <IndexLink to="/"
                 role="button"
                 id="home-nav-button"
                 activeClassName="active">Home
      </IndexLink>
    </li>
    <li>
      <Link to="/projects"
            role="button"
            id="projects-nav-button"
            activeClassName="active">Projects
      </Link>
    </li>
  </ul>;