
const showDatas = function (obj, type) {
	switch(type) {
		case 'current': 
			currentWeather(obj);
			break;
		default:
			console.log("Error! Undefined type!");
			break;
	}
}

const currentWeather = function(obj) {
	console.log("CURRENT WEATHER");
	const {city_name, country_code, datetime, temp, weather, description, app_temp, wind_spd, wind_cdir_full, rh, pres} = obj.data[0];
	console.log(`Miejscowość: ${city_name} ${country_code}
				Data: ${datetime} 
				Temperatura: ${temp}
				Stan: ${weather.description}
				Odczuwalna: ${app_temp} 
				Wiatr: ${wind_spd} m/s Kierunek: ${wind_cdir_full}
				Wilgotność: ${rh}
				Ciśnienie: ${pres}`);
}

export {showDatas};