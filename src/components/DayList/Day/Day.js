function addNewElement(elType, elClass, elParent, elDatas) {
	const newEl = document.createElement(elType);
	newEl.classList.add(elClass);
	if (elClass === 'day__icon') {
		newEl.classList.add('wi');
		newEl.classList.add(getImageName(elDatas)); 
	} else newEl.textContent = elDatas;
	elParent.appendChild(newEl);
}

function getImageName(icon) {
		switch (icon) {
			case 621:
				return 'wi-snow-wind';
			case 521:
				return 'wi-day-rain';
			case 610:
				return 'wi-rain-mix';
			case 601:
				return 'wi-snow';
			case 202:
				return 'wi-day-storm-showers';
			case 800:
				return 'wi-day-sunny';
			case 801:
				return 'wi-day-cloudy';
			case 602:
				return 'wi-snow-wind';
			case 741:
				return 'wi-day-fog';
			case 721:
				return 'wi-day-haze';
			case 804:
				return 'wi-day-cloudy-high';
			case 803:
				return 'wi-day-sunny';
			case 802:
				return 'wi-day-sunny-overcast';
			case 611:
				return 'wi-rain-mix';
			case 612:
				return 'wi-rain-mix';
			case 501:
				return 'wi-day-rain';
			case 600:
				return 'wi-day-snow';
			case 231:
				return 'wi-day-storm-showers';
			case 232:
				return 'wi-day-storm-showers';
			case 233:
				return 'wi-day-storm-showers';
			case 751:
				return 'wi-day-fog';
			case 731:
				return 'wi-day-fog';
			case 711:
				return 'wi-day-fog';
			case 700:
				return 'wi-day-fog';
			case 623:
				return 'wi-day-rain';
			case 613:
				return 'wi-day-snow';
			case 522:
				return 'wi-day-rain';
			case 520:
				return 'wi-day-rain';
			case 511:
				return 'wi-day-rain';
			case 502:
				return 'wi-day-rain';
			case 500:
				return 'wi-day-rain';
			case 302:
				return 'wi-day-rain';
			case 301:
				return 'wi-day-rain';
			case 300:
				return 'wi-day-rain';
			case 230:
				return 'wi-day-storm-showers';
			case 201:
				return 'wi-day-storm-showers';
			case 200:
				return 'wi-day-storm-showers';
			default:
				return 'error';
		}
	}

function createDay(day) {
	const { datetime, temp, weather, 
	wind_spd: windSpd, wind_cdir_full: windDir, rh, pres } = day;
	const newDay = document.createElement('li');
	newDay.classList.add('results__day');
	addNewElement('p', 'day__temp', newDay, `${temp}\xB0`);
	addNewElement('p', 'day__description', newDay, weather.description);
	addNewElement('p', 'day__newDate', newDay, datetime);
	addNewElement('span', 'day__icon', newDay, weather.code);
	const dayCase = document.createElement('div');
	dayCase.classList.add('day__more');
	addNewElement('p', 'day__wind', dayCase, `Wind: ${windSpd}`);
	addNewElement('p', 'day__windDir', dayCase, `Direction: ${windDir}`);
	addNewElement('p', 'day__day__pressure', dayCase, `Pressure: ${pres}`);
	addNewElement('p', 'day__precipitation', dayCase, `Humidity: ${rh}`); // ZMIEŃ !
	newDay.appendChild(dayCase);
	return newDay;
}

export { createDay };
