// main case to show informations
const resultsCase = document.querySelector('.results');

// link constructor
class SourceLink {
	constructor(type, city, key) {
		this.type = type;
		this.city = city;
		this.key = key;
	}
	addName() {
		const cityName = document.createElement('p');
		const curDate = document.createElement('p');
		cityName.classList.add('day__city');
		cityName.textContent = this.city;
		curDate.classList.add('day__date');
		curDate.textContent = new Date().toDateString();
		if (resultsCase.querySelector('p') != null) resultsCase.innerHTML = '';
		resultsCase.appendChild(cityName);
		resultsCase.appendChild(curDate);
	}
	createLink() {
		return `https://api.weatherbit.io/v2.0/${this.type}?city=${this.city}&lang=en&key=${this.key}`;
	}
}

export { SourceLink, resultsCase };
