import {searchCity} from './components/SearchBar/SearchBar';
import {SourceLink} from './components/SourceLink/SourceLink';
import {showCurrentDay} from './components/CurrentDay/CurrentDay';

const key = "77495ca5727d41468325a028e4c74bcf";

const submitKey = document.querySelector('.weatherForm__submit');
submitKey.addEventListener("click", (e) => {
	e.preventDefault();
	// const type = "current";
	const type = "forecast/daily";
	const cityName = document.querySelector('.weatherForm__input').value;
	const newUrl = new SourceLink(type, cityName, key);
	console.log(newUrl.createLink());
	searchCity(newUrl.createLink(), type);
});
