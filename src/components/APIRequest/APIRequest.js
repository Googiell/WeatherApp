// promise with XMLHttpRequest async

function readData (url) {
	return new Promise((resolve, rejest) => {
		const req = new XMLHttpRequest();
		req.open("GET", url);
		req.addEventListener("load", () => resolve(JSON.parse(req.responseText))); // all right, return JSON parse object
		req.addEventListener("error", () => reject(req.statusText)); // error, return request status
		req.send();
	});
}

export {readData};