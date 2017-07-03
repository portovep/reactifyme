import React from 'react';


const headerStyle = {
  borderBottom: "none",
  paddingBottom: "0px"
};

export const ProjectHeader = ({project}) =>
  <div className="page-header"
       style={headerStyle}>
    <h1>{project.name}&nbsp;
      <small>{project.date}</small>
    </h1>
  </div>;
