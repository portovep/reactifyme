import React from 'react';
import {PersonalStatement} from '../index';
import {CurrentlyWorkingOn} from '../index';

export const PersonalInfoPanel = ({bio}) =>
  <div>
    <PersonalStatement
      title={bio.personalStatement.title}
      statement={bio.personalStatement.statement}/>
    <hr/>
    <CurrentlyWorkingOn
      description={bio.currentlyWorkingOn.description}/>
    <hr/>
  </div>;
