import React from 'react';

export const ArticleCard = ({ title, description, imageLink, link }) => (
  <div className="thumbnail">
    <img src={imageLink} />
    <div className="caption">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <p>
        <a
          href={link}
          target="_blank"
          className="btn btn-primary"
          role="button"
        >
          Read
        </a>
      </p>
    </div>
  </div>
);
