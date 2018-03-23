// promise with XMLHttpRequest async

function readData(url) {
	return new Promise((resolve, reject) => {
		const req = new XMLHttpRequest();
		req.open('GET', url);
		// all right, return JSON parse object
		req.addEventListener('load', () => resolve(JSON.parse(req.responseText))); 
		// error, return request status
		req.addEventListener('error', () => reject(req.statusText)); 
		req.send();
	});
}

export { readData };
