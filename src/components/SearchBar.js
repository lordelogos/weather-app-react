import React, { useState } from "react";

function SearchBar(props) {
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");
	return (
		<div className="form">
			<form
				// autoComplete="off"
				onSubmit={(e) => {
					props.submit(e);
					setState("");
					setCountry("");
				}}>
				<input
					type="text"
					name="state"
					value={state}
					placeholder="City/State"
					onChange={(e) => {
						setState(e.target.value);
					}}
					required
				/>
				<input
					type="text"
					name="country"
					value={country}
					required
					placeholder="Country"
					onChange={(e) => {
						setCountry(e.target.value);
					}}
				/>
				<button type="submit">Get Weather</button>
			</form>
		</div>
	);
}

export default SearchBar;
