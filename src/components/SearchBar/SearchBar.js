import {readData} from '../APIRequest/APIRequest';

let newResolve;

function searchCity (cityName, newUrl) {
	readData(newUrl).then(function(res){
		console.log(res);
	}).catch(function(rej) {
		console.log(rej);
	}); 
}

export {searchCity};
