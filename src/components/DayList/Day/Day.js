function createDay(day) {
	const { datetime, temp, app_min_temp: tempMin, app_max_temp: tempMax, weather, 
	wind_spd: windSpd, wind_cdir_full: windDir, rh, pres } = day;
	const newDay = document.createElement('li');
	const contentParagraph = document.createElement('p');
	contentParagraph.textContent = 
		`Data: ${datetime}
		Temperatura: od ${tempMin} do ${tempMax}
		Stan: ${weather.description}
		Odczuwalna: ${temp} 
		Wiatr: ${windSpd} m/s Kierunek: ${windDir}
		Wilgotność: ${rh}
		Ciśnienie: ${pres}`;
	newDay.appendChild(contentParagraph);
	return newDay;
}

export { createDay };
