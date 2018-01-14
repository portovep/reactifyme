import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

import './ProjectImagesPanel.css';

const displayCarouselImageOld = (imageLink, idx) => (
  <Carousel.Item key={idx}>
    <img className="pv-img-android" src={imageLink} alt="" />
  </Carousel.Item>
);

export const ProjectImagesPanel = ({ project }) => (
  <Carousel>{project.images.map(displayCarouselImageOld)}</Carousel>
);
