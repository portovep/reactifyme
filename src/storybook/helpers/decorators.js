import React from 'react';

export const ListDecorator = story => (
  <dl className="dl-horizontal">{story()}</dl>
);

export const RightColumnDecorator = story => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">{story()}</div>
    </div>
  </div>
);

export const SmallColumnDecorator = story => (
  <div className="container">
    <div className="row">
      <div className="col-md-2">{story()}</div>
    </div>
  </div>
);

export const LeftColumnDecorator = story => (
  <div className="container">
    <div className="row">
      <div className="col-md-2">{story()}</div>
    </div>
  </div>
);
