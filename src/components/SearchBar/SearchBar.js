import {readData} from '../APIRequest/APIRequest';
import {showDatas} from '../ShowDatas/ShowDatas';

// searchInput method using readData from APIRequest 
// (readData returns Promise)
function searchCity (url, type) {
	console.log("Sending a query to the API");
	readData(url)
	.then(function(res){
		console.log("Sending a query completed successfully");
		return (res);
	})
	.then(function(res){
		showDatas(res, type);
	})
	.catch(function(rej) {
		console.log("Query sending failed");
		return (rej);
	}); 
}

export {searchCity};
