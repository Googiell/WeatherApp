// if user wants to check current weather
import { resultsCase } from '../SourceLink/SourceLink';

function showCurrentDay(day) {
	if (resultsCase.querySelector('li') != null) resultsCase.innerHTML = ''; // clear old informations
	// destructuring to catch needed informations
	const { datetime, temp, weather, app_temp: appTemp, wind_spd: windSpd,
	wind_cdir_full: windDir, rh, pres } = day;
	const newDay = document.createElement('li');
	const contentParagraph = document.createElement('p');
	contentParagraph.textContent = 
		`Data: ${datetime}
		Temperatura: ${temp}
		Stan: ${weather.description}
		Odczuwalna: ${appTemp} 
		Wiatr: ${windSpd} m/s Kierunek: ${windDir}
		Wilgotność: ${rh}
		Ciśnienie: ${pres}`;
	newDay.appendChild(contentParagraph);
	resultsCase.appendChild(newDay);
}


export { showCurrentDay };
