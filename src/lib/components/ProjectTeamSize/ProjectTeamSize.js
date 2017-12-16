import React from 'react';
import {TeamMemberBadge} from './TeamMemberBadge';


const styles = {
  padding: '1px'
};

const displayTeamMember = (idx) =>
  <TeamMemberBadge key={idx}
                   styles={styles}/>;

const displayTeamMembers = (teamSize) =>
  <dd>
    {Array.from({length: teamSize}, (v, i) => i)
      .map((idx) => displayTeamMember(idx))}
  </dd>;

const displayTeamMembersCount = (teamSize) =>
  <dd>
    {displayTeamMember(0)} <span>x {teamSize}</span>
  </dd>;

export const ProjectTeamSize = ({size}) =>
  <div>
    <dt>Team</dt>
    {size < 5 ? 
      displayTeamMembers(size) : 
      displayTeamMembersCount(size)}
  </div>;