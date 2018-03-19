class SourceLink {
	constructor(type, city, key) {
		this.type = type;
		this.city = city;
		this.key = key;
	}
	createLink() {
		return `https://api.weatherbit.io/v2.0/${this.type}?city=${this.city}&lang=pl&key=${this.key}`;
	}
}

export {SourceLink};