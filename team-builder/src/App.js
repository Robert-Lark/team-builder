import React from "react";
import { useState } from "react";
import "./App.css";
import Form from "./Form.js";
import TeamMembers from "./teamMembers";

function App() {
	const [newTeamMember, setNewTeamMember] = useState([]);

	return (
		<div className="App">
      <h1>Wanna join our team? Enter your info here.</h1>
			<Form newTeamMember={newTeamMember} setNewTeamMember={setNewTeamMember} />
      <h1>TEAM MEMBERS</h1>
      <TeamMembers team={newTeamMember}/>
		</div>
	);
}

export default App;
