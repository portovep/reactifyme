import React from 'react';
import {IndexLink, Link} from "react-router";

export const Navigation = () =>
  <ul className="nav nav-pills nav-stacked text-center pv-sidebar navigation">
    <li>
      <IndexLink to="/"
                 role="button"
                 activeClassName="active">Home
      </IndexLink>
    </li>
    <li>
      <Link to="/projects"
            role="button"
            activeClassName="active">Projects
      </Link>
    </li>
  </ul>;