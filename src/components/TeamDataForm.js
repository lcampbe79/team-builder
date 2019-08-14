import React, { useState } from 'react';
import ReactDom from 'react-dom';

const TeamDataForm = props => {
  console.log(props);

  const [newTeamMember, setNewTeamMember] = useState({ name: "", email: "", role: ""})

  const changeHandler= event => {
    console.log(event.target)
    setNewTeamMember({...newTeamMember, [event.target.name]: event.target.value});
  };


  const submitForm = event => {
    event.preventDefault();
    console.log(newTeamMember)
    const newTeam = {
      ...newTeamMember,
    }
    props.addNewMember(newTeam)
  }

  return (
   
    <form onSubmit={submitForm}>

      <label htmlFor='name'>
        Name:
        <input 
        type='text' 
        name='name'
        value={newTeamMember.name}
        onChange={changeHandler}
        />
      </label>

      <label htmlFor='email'>
        Email:
        <input 
        type='text' 
        name='email'
        value={newTeamMember.email}
        onChange={changeHandler}
        />
      </label>

      <label htmlFor='role'>
        Role:
        <input 
        type='text' 
        name='role'
        value={newTeamMember.role}
        onChange={changeHandler}
        />
      </label>
      <button type="submit">Add New Team Member</button>
    </form>
  );
};

export default TeamDataForm;
