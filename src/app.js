// main js file
import { searchCity } from './components/SearchBar/SearchBar';
import { SourceLink } from './components/SourceLink/SourceLink';

const key = '77495ca5727d41468325a028e4c74bcf'; // API key

const submitKey = document.querySelector('.weatherForm__submit');
submitKey.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('.container').classList.remove('container--hidden');
	document.querySelector('.configuration').classList.add('configuration--hidden');
	const startSection = document.querySelector('.startSection');
	if (startSection) startSection.parentNode.removeChild(startSection);
	const type = 'forecast/daily';
	const cityName = document.querySelector('.weatherForm__input').value;
	const newUrl = new SourceLink(type, cityName, key);
	newUrl.addName();
	searchCity(newUrl.createLink(), type);
});

const configButton = document.querySelector('.header__configButton');
configButton.addEventListener('click', () => {
	// document.querySelector('.configuration').classList.toggle('configuration--active');
	document.querySelector('.container').classList.toggle('container--hidden');
	document.querySelector('.configuration').classList.toggle('configuration--hidden'); 
});