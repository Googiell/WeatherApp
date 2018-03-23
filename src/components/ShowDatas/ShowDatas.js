// switch case for type request
import { createList } from '../DayList/DayList';
import { showCurrentDay } from '../CurrentDay/CurrentDay';

function showDatas(obj, type) {
	switch (type) {
		case 'current': 
			showCurrentDay(obj.data[0]);
			break;
		case 'forecast/daily':
			createList(obj);
			break;
		default:
			console.log('Error! Undefined type!');
			break;
	}
}

export { showDatas };
