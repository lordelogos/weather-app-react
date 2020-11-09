import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
const API_KEY = "efd459ec6a4bc2b428d7fc4440aff4f6";

function App() {
	const [state, setState] = useState("London");
	const [country, setCountry] = useState("UK");
	const [data, setData] = useState({
		data: {
			coord: { lon: -118.24, lat: 34.05 },
			weather: [
				{ id: 800, main: "Clear", description: "clear sky", icon: "01d" },
			],
			base: "stations",
			main: {
				temp: 15.51,
				feels_like: 12.13,
				temp_min: 14.44,
				temp_max: 16.67,
				pressure: 1007,
				humidity: 48,
			},
			visibility: 10000,
			wind: { speed: 3.1, deg: 260, gust: 11.3 },
			clouds: { all: 1 },
			dt: 1604876488,
			sys: {
				type: 1,
				id: 3694,
				country: "US",
				sunrise: 1604845176,
				sunset: 1604883239,
			},
			timezone: -28800,
			id: 5368361,
			name: "Los Angeles",
			cod: 200,
		},
	});
	const [loaded, setLoaded] = useState(false);

	let fetchRes = async () => {
		// setLoaded(false);
		// setOldData(data);
		let data = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${state},${country}&units=metric&appid=${API_KEY}`
		);
		let res = await data.json();
		setData(res);
		setLoaded(true);
	};

	let handleSubmit = (e) => {
		e.preventDefault();
		setState(e.target.elements.state.value);
		setCountry(e.target.elements.country.value);
	};

	useEffect(() => {
		// console.log(state, country, data);
		fetchRes();
		// eslint-disable-next-line
	}, [country, state]);

	return (
		<div className="app">
			<SearchBar submit={handleSubmit} />
			{loaded ? (
				<WeatherDisplay data={data} />
			) : (
				<div className="container">
					<p className="location">London, GB</p>
					<i className="wi wi-day-sunny"></i>
					<p className="temp">25&deg;</p>
					<div className="minmax">
						<div>
							<p>Min</p>
							<p>23&deg;</p>
						</div>
						<div>
							<p>Max</p>
							<p>27&deg;</p>
						</div>
					</div>
					<p className="desc">Light breeze</p>
					<p className="hum">Humidity: 87%</p>
					<p className="dew">Pressure: 1092hPa</p>
				</div>
			)}
		</div>
	);
}

export default App;
