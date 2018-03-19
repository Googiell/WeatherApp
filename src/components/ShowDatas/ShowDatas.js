
const showDatas = function (obj, type) {
	console.log(`switchuje ${type}`);
	switch(type) {
		case 'current': 
			currentWeather(obj);
			break;
		case 'forecast/daily':
			forecastWeather(obj);
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

const namesOfAWeek = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];

const showDay = function(day) {
	const {datetime, temp, app_min_temp, app_max_temp, weather, description, app_temp, wind_spd, wind_cdir_full, rh, pres} = day;
	console.log(`Data: ${datetime} ${namesOfAWeek[new Date(datetime).getDay()]}
				Temperatura: od ${app_min_temp} do ${app_max_temp}
				Stan: ${weather.description}
				Odczuwalna: ${temp} 
				Wiatr: ${wind_spd} m/s Kierunek: ${wind_cdir_full}
				Wilgotność: ${rh}
				Ciśnienie: ${pres}`);
}

const forecastWeather = function(obj) {
	console.log("forecastWeather HERE!");
	obj.data.forEach(day => {
		showDay(day);
	});
}

export {showDatas};