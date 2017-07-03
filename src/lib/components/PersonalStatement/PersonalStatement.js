import React from 'react';
import {htmlForReact} from '../../helpers/helpers';

const styles = {
  textAlign: 'justify'
};

export const PersonalStatement = ({title, statement}) =>
  <div className="homepage-statement lead"
       style={styles}>
    <p className="homepage-statement--title text-center">
      <strong>{title}</strong>
    </p>
    <div dangerouslySetInnerHTML={htmlForReact(statement)}/>
  </div>;