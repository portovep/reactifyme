import React from 'react';
import {TeamMemberBadge} from './TeamMemberBadge';


const styles = {
  padding: '1px'
};

const displayTeamMember = (idx) =>
  <TeamMemberBadge key={idx}
                   styles={styles}/>;

const displayTeamMembers = (teamSize) =>
  Array.from({length: teamSize}, (v, i) => i)
    .map((idx) => displayTeamMember(idx));

export const ProjectTeamSize = ({size}) =>
  <div>
    <dt>Team</dt>
    <dd>{displayTeamMembers(size)}</dd>
  </div>;