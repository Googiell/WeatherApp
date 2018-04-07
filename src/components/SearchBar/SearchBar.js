// searchInput method using readData from APIRequest (readData returns Promise)

import { readData } from '../APIRequest/APIRequest';
import { showDatas } from '../ShowDatas/ShowDatas';

function searchCity(url, type) {
	readData(url)
	.then((res) => res)
	.then((res) => {
		showDatas(res, type); // function with switch case for type
		changeFormView();
	})
	.catch((rej) => rej); 
}

export { searchCity };
