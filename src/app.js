// main js file
import { searchCity } from './components/SearchBar/SearchBar';
import { SourceLink } from './components/SourceLink/SourceLink';

const key = '77495ca5727d41468325a028e4c74bcf'; // API key

const submitKey = document.querySelector('.weatherForm__submit');
submitKey.addEventListener('click', (e) => {
	e.preventDefault();
	const type = submitKey.dataset.searchoption; 
	const cityName = document.querySelector('.weatherForm__input').value;
	const newUrl = new SourceLink(type, cityName, key);
	searchCity(newUrl.createLink(), type);
});

// radio elements handling
const optionFormRadio = document.querySelectorAll('.optionForm__radio');
optionFormRadio.forEach(radio => {
	radio.addEventListener('change', () => {
	submitKey.dataset.searchoption = this.value; // change type of request and save to submitKey data
});
});
