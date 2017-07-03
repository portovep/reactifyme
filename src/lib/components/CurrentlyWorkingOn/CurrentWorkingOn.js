import React from 'react';
import {htmlForReact} from '../../helpers/helpers';

const styles = {
  textAlign: 'justify'
};

export const CurrentlyWorkingOn = ({description}) =>
  <div className="homepage-current-status text-muted"
       style={styles}
       dangerouslySetInnerHTML={htmlForReact(description)}/>;
