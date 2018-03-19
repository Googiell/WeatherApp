// promise with XMLHyypRequest async
function readData (url) {
	return new Promise((resolve, rejest) => {
		const req = new XMLHttpRequest();
		req.open("GET", url);
		req.addEventListener("load", () => resolve(JSON.parse(req.responseText)));
		req.addEventListener("error", () => reject(req.statusText));
		console.log("Sending request from APIRequest.js");
		req.send();
	});
}

export {readData};