function readData (url) {
	return new Promise((resolve, rejest) => {
		const req = new XMLHttpRequest();
		req.open("GET", url);
		req.addEventListener("load", () => resolve(JSON.parse(req.responseText)));
		req.addEventListener("error", () => reject(req.statusText));
		req.send();
	});
}

export {readData};