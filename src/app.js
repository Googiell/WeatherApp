import {searchCity} from './components/SearchBar/SearchBar';


const key = "77495ca5727d41468325a028e4c74bcf";

const submitKey = document.querySelector('.weatherForm__submit');
submitKey.addEventListener("click", (e) => {
	const cityName = document.querySelector('.weatherForm__input').value;
	const newUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&lang=pl&key=${key}`;
	e.preventDefault();
	searchCity(cityName, newUrl);
});
