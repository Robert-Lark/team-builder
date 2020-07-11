import React from "react";
import { useState } from "react";
import "./App.css";
import Form from "./Form.js";
import TeamMembers from "./teamMembers";
import { Alert } from "reactstrap";
import styled from "styled-components";
import { keyframes } from "styled-components";
import guildLogo from "./guildLogo.png";

function App() {
	const WrapperDiv = styled.div`
		width: 100%;
		height: 100vh;
		background-color: #faebd7;
	`;
	const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

	const Rotate = styled.div`
		display: inline-block;
		animation: ${rotate} 10s linear infinite;
		padding: 2rem 1rem;
		font-size: 1.2rem;
	`;

	const [newTeamMember, setNewTeamMember] = useState([]);

	return (
		<WrapperDiv>
			<div className="App">
				<Alert color="primary"></Alert>
				<h1>Interested in a career in professional Villainy?</h1>
				<Form
					newTeamMember={newTeamMember}
					setNewTeamMember={setNewTeamMember}
				/>
				
				<Rotate>
          <img src={guildLogo} />
				</Rotate>
        <h1>TEAM MEMBERS</h1>
        <TeamMembers team={newTeamMember} />
			</div>
		</WrapperDiv>
	);
}

export default App;
