import React from "react";
import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Form = (props) => {
	const defaultState = { name: "", email: "" };
	const [newTeamMember, setNewTeamMember] = useState(defaultState);

	const handleChange = (event) => {
		setNewTeamMember({
			...newTeamMember,
			[event.target.name]: event.target.value,
		});
	};

	const addTeamMember = (event) => {
		event.preventDefault();
		props.setNewTeamMember([...props.newTeamMember, newTeamMember]);
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
					placeholder="# of Henchmen"
				/>
				<input
					onChange={handleChange}
					name="role"
					type="text"
					placeholder="Arch-Enemy"
				/>

				<select onChange={handleChange} name="gender">
					<option value="gender">Super-Power</option>
					<option value="male">Elemental</option>
					<option value="female">Mad-Scientist</option>
					<option value="other">Half Man Half Animal</option>
				</select>
				<button type="submit">Apply to the Guild</button>
			</form>
		</div>
	);
};

export default Form;
