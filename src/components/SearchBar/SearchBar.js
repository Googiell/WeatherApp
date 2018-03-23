// searchInput method using readData from APIRequest (readData returns Promise)

import {readData} from '../APIRequest/APIRequest';
import {showDatas} from '../ShowDatas/ShowDatas';

function searchCity (url, type) {
	readData(url)
	.then(function(res){
		return (res);
	})
	.then(function(res){
		showDatas(res, type); // function with switch case for type
	})
	.catch(function(rej) {
		return (rej);
	}); 
}

export {searchCity};
