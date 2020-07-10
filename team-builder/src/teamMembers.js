import React from "react";

const TeamMembers = (props) => {
	return (
		<div className="note-list">
			{props.team.map((team, i) => (
				<div key={i}>
					<h2>{team.name}</h2>
					<p>{team.email}</p>
					<p>{team.role}</p>
					<p>{team.gender}</p>
				</div>
			))}
		</div>
	);
};

export default TeamMembers;
