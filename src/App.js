import React, { useState } from 'react';
import './App.css';

import data from './data.js'
import TeamDataForm from './components/TeamDataForm.js';
import TeamMembers from './components/TeamMembers.js';

function App() {
  const [team, setTeam] = useState(data);
  
  const addNewMember = teamMember => {
    setTeam([...team, teamMember]);
  };
 

  console.log(team)
  return (
    <div className="App">
      <TeamDataForm addNewMember={addNewMember} />
      <TeamMembers teamMembers={team} />
    </div>
  );
}

export default App;
// {name:'', email: '', role:''}