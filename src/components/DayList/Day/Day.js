function createDay(day) {
	const {datetime, temp, app_min_temp, app_max_temp, weather, description, app_temp, wind_spd, wind_cdir_full, rh, pres} = day;
	const newDay = document.createElement("li");
	const contentParagraph = document.createElement("p");
	contentParagraph.textContent = 
		`Data: ${datetime}
		Temperatura: od ${app_min_temp} do ${app_max_temp}
		Stan: ${weather.description}
		Odczuwalna: ${temp} 
		Wiatr: ${wind_spd} m/s Kierunek: ${wind_cdir_full}
		Wilgotność: ${rh}
		Ciśnienie: ${pres}`;
	newDay.appendChild(contentParagraph);
	return newDay;
}

export {createDay};