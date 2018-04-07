// if user wants to check current weather
import { resultsCase } from '../SourceLink/SourceLink';

function showCurrentDay(day) {
	if (resultsCase.querySelector('li') != null || resultsCase.querySelector('div') != null) {
		resultsCase.innerHTML = ''; // clear old informations
	}
	console.log(day);
	// destructuring to catch needed informations
	const { city_name: cityName, country_code: countryCode, datetime, temp, weather, 
	app_temp: appTemp, wind_spd: windSpd, wind_cdir_full: windDir, rh, pres } = day;
	const newDay = document.createElement('div');
	const infoParagraph = document.createElement('p');
	infoParagraph.classList.add('results__info');
	infoParagraph.textContent = 
	`
	Current weather in ${cityName} ${countryCode}
	${datetime}
	`;

	const mainInfoParagraph = document.createElement('p');
	mainInfoParagraph.classList.add('results__mainInfo');
	mainInfoParagraph.textContent = 
	`
	${temp}${String.fromCharCode(176)} 
	${weather.description}
	`; // 176 - asci degrees

	const contentParagraph = document.createElement('p');
	contentParagraph.classList.add('results__content');
	const text = 
	`
	Odczuwalna: ${appTemp}
	Wiatr: ${windSpd} m/s Kierunek: ${windDir} 
	Wilgotność: ${rh} 
	Ciśnienie: ${pres}
	`;
	contentParagraph.textContent = text;

	newDay.appendChild(infoParagraph);
	newDay.appendChild(mainInfoParagraph);
	newDay.appendChild(contentParagraph);
	resultsCase.appendChild(newDay);
}


export { showCurrentDay };
