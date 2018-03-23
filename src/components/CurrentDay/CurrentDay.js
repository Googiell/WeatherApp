// if user wants to check current weather
import {resultsCase} from '../SourceLink/SourceLink';

function showCurrentDay (day) {
	if (resultsCase.querySelector('li') != null) resultsCase.innerHTML = ''; // clear old informations
	// destructuring to catch needed informations
	const {datetime, temp, app_min_temp, app_max_temp, weather, description, app_temp, wind_spd, wind_cdir_full, rh, pres} = day;
	const newDay = document.createElement("li");
	const contentParagraph = document.createElement("p");
	contentParagraph.textContent = 
		`Data: ${datetime}
		Temperatura: ${temp}
		Stan: ${weather.description}
		Odczuwalna: ${app_temp} 
		Wiatr: ${wind_spd} m/s Kierunek: ${wind_cdir_full}
		Wilgotność: ${rh}
		Ciśnienie: ${pres}`;
	newDay.appendChild(contentParagraph);
	resultsCase.appendChild(newDay);
}


export {showCurrentDay};