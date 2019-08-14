import React from 'react';


const teamMembers = props => {
  console.log(props)
  return (
    <div>
      {props.teamMembers.map(teamMember => {
        return (
          <div key={teamMember.name}> 
          {teamMember.name}: {teamMember.email}: {teamMember.role}
          </div>
        )
      })}
    </div>
  );
};

export default teamMembers;