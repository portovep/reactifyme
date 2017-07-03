import React from 'react';
import {Navigation} from '../index';

export const AppLayout = ({children}) =>
  <div className="container">
    <div className="row">
      <div className="col-md-2">
        <Navigation />
      </div>
      <div className="col-md-8">
        {children}
      </div>
    </div>
  </div>;
