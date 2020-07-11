import React from "react";

const TeamMembers = (props) => {
	return (
		<div className="note-list">
			{props.team.map((team, i) => (
				<div key={i}>
					<h2>NAME: {team.name}</h2>
					<p># of Henchmen: {team.email}</p>
					<p>Arch-Enemy: {team.role}</p>
					<p>Super-Power: {team.gender}</p>
				</div>
			))}
		</div>
	);
};

export default TeamMembers;
