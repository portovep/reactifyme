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
    <li>
      <Link to="/experiments"
            role="button"
            id="experiments-nav-button"
            activeClassName="active">Experiments
      </Link>
    </li>
    <li>
      <Link to="/articles"
            role="button"
            id="articles-nav-button"
            activeClassName="active">Articles
      </Link>
    </li>
  </ul>;