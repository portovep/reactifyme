import React from 'react';
import {htmlForReact} from '../../helpers/helpers';

import './PersonalStatement.css';


export const PersonalStatement = ({title, statement}) =>
  <div className="lead personal-statement">
    <p className="personal-statement__title text-center">
      <strong>{title}</strong>
    </p>
    <div className="personal-statement__statement" dangerouslySetInnerHTML={htmlForReact(statement)}/>
  </div>;