import React from "react";
import { useState } from "react";
import "./App.css";

const Form = (props) => {
	const defaultState = { name: "", email: "", role: "" };
	const { newTeamMember, setNewTeamMember } = useState(defaultState);
	const handleChange = (event) => {
		setNewTeamMember({
			...newTeamMember,
			[event.target.name]: event.target.value,
		});
	};
	const addTeamMember = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={addTeamMember}>
				<input
					onChange={handleChange}
					name="name"
					type="text"
					placeholder="Name"
				/>
				<input
					onChange={handleChange}
					name="email"
					type="text"
					placeholder="Email"
				/>
				<input
					onChange={handleChange}
					name="role"
					type="text"
					placeholder="Role"
				/>
				<select onChange={handleChange} name="gender">
					<option value="gender">Gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
				<button type="submit">Add Team-member</button>
			</form>
		</div>
	);
};

export default Form;
