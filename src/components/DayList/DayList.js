// if user wants to check forecast daily weather
import { createDay } from '../DayList/Day/Day';
import { resultsCase } from '../SourceLink/SourceLink';

// create list function, argument - object from api request
function createList(datas) {
	if (resultsCase.querySelector('li') != null || resultsCase.querySelector('div') != null) {
		resultsCase.innerHTML = ''; // clear old informations
	}
	
	const newList = document.createElement('ul'); // create new list 
	newList.classList.add('results__list');
	datas.data.forEach(day => { 
		newList.appendChild(createDay(day)); 
	});
	resultsCase.appendChild(newList);
	console.log(resultsCase.childNodes[0]);
	const days = document.querySelectorAll('.results__day');
	days.forEach((day) => {
		day.addEventListener('click', () => {
			day.classList.toggle('results__day--more');
		});
	});
	newList.childNodes[0].classList.add('results__day--today');
}

export { createList };
