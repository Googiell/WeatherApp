// if user wants to check forecast daily weather
import {createDay} from '../DayList/Day/Day';
import {resultsCase} from '../SourceLink/SourceLink';

// create list function, argument - object from api request
function createList(datas) {
	if (resultsCase.querySelector('li') != null) resultsCase.innerHTML = ''; // clear old informations
	const newList = document.createElement("ul"); // create new list 
	datas.data.forEach(day => { 
		newList.appendChild(createDay(day)); 
	});
	resultsCase.appendChild(newList);
}

export {createList};