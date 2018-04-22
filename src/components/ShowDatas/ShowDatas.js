// switch case for type request
import { createList } from '../DayList/DayList';

function showDatas(obj, type) {
	switch (type) {
	case 'forecast/daily':
		createList(obj);
		break;
	default:
		console.log('Error! Undefined type!');
		break;
	}
}

export { showDatas };
