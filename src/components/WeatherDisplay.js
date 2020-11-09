import React from "react";
import "weather-icons/css/weather-icons.css";

function WeatherDisplay(props) {
	let wId = props.data.weather[0].id;
	let icon;
	if (wId >= 200 && wId <= 232) {
		icon = "wi-thunderstorm";
	} else if (wId >= 300 && wId <= 321) {
		icon = "wi-day-sprinkle";
	} else if (wId >= 500 && wId <= 531) {
		icon = "wi-day-rain";
	} else if (wId >= 600 && wId <= 622) {
		icon = "wi-day-snow";
	} else if (wId >= 801 && wId <= 804) {
		icon = "wi-day-cloudy";
	} else if (wId === 701) {
		icon = "wi-smog";
	} else if (wId === 711) {
		icon = "wi-smoke";
	} else if (wId === 721) {
		icon = "wi-day-haze";
	} else if (wId === 731) {
		icon = "wi-dust";
	} else if (wId === 741) {
		icon = "wi-day-fog";
	} else if (wId === 751) {
		icon = "wi-sandstorm";
	} else if (wId === 761) {
		icon = "wi-dust";
	} else if (wId === 762) {
		icon = "wi-smog";
	} else if (wId === 771) {
		icon = "wi-smog";
	} else if (wId === 781) {
		icon = "wi-tornado";
	} else {
		icon = "wi-day-sunny";
	}

	return (
		<div className="container">
			<p className="location">
				{props.data.name}, {props.data.sys.country}
			</p>
			<i className={`wi ${icon}`}></i>
			<p className="temp">{props.data.main.temp}&deg;</p>
			<div className="minmax">
				<div>
					<p>Min</p>
					<p>{props.data.main.temp_min}&deg;</p>
				</div>
				<div>
					<p>Max</p>
					<p>{props.data.main.temp_max}&deg;</p>
				</div>
			</div>
			<p className="desc">{props.data.weather[0].description}</p>
			<p className="hum">Humidity: {props.data.main.humidity}%</p>
			<p className="dew">Pressure: {props.data.main.pressure}hPa</p>
		</div>
	);
}

export default WeatherDisplay;
