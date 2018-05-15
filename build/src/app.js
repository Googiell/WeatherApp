(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _SearchBar = require('./components/SearchBar/SearchBar');

var _SourceLink = require('./components/SourceLink/SourceLink');

// main js file
var key = '77495ca5727d41468325a028e4c74bcf'; // API key

var submitKey = document.querySelector('.weatherForm__submit');
submitKey.addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('.container').classList.remove('container--hidden');
	document.querySelector('.configuration').classList.add('configuration--hidden');
	var startSection = document.querySelector('.startSection');
	if (startSection) startSection.parentNode.removeChild(startSection);
	var type = 'forecast/daily';
	var cityName = document.querySelector('.weatherForm__input').value;
	var newUrl = new _SourceLink.SourceLink(type, cityName, key);
	newUrl.addName();
	(0, _SearchBar.searchCity)(newUrl.createLink(), type);
});

var configButton = document.querySelector('.header__configButton');
configButton.addEventListener('click', function () {
	// document.querySelector('.configuration').classList.toggle('configuration--active');
	document.querySelector('.container').classList.toggle('container--hidden');
	document.querySelector('.configuration').classList.toggle('configuration--hidden');
});

var backButton = document.querySelector('.configuration__configButton');
backButton.addEventListener('click', function () {
	document.querySelector('.container').classList.toggle('container--hidden');
	document.querySelector('.configuration').classList.toggle('configuration--hidden');
});

},{"./components/SearchBar/SearchBar":5,"./components/SourceLink/SourceLink":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// promise with XMLHttpRequest async

function readData(url) {
	return new Promise(function (resolve, reject) {
		var req = new XMLHttpRequest();
		req.open('GET', url);
		console.log(url);
		// all right, return JSON parse object
		req.addEventListener('load', function () {
			return resolve(JSON.parse(req.responseText));
		});
		// error, return request status
		req.addEventListener('error', function () {
			return reject(req.statusText);
		});
		req.send();
	});
}

exports.readData = readData;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function addNewElement(elType, elClass, elParent, elDatas) {
	var newEl = document.createElement(elType);
	newEl.classList.add(elClass);
	if (elClass === 'day__icon') {
		newEl.classList.add('wi');
		newEl.classList.add(getImageName(elDatas));
	} else newEl.textContent = elDatas;
	elParent.appendChild(newEl);
}

function getImageName(icon) {
	switch (icon) {
		case 621:
			return 'wi-snow-wind';
		case 521:
			return 'wi-day-rain';
		case 610:
			return 'wi-rain-mix';
		case 601:
			return 'wi-snow';
		case 202:
			return 'wi-day-storm-showers';
		case 800:
			return 'wi-day-sunny';
		case 801:
			return 'wi-day-cloudy';
		case 602:
			return 'wi-snow-wind';
		case 741:
			return 'wi-day-fog';
		case 721:
			return 'wi-day-haze';
		case 804:
			return 'wi-day-cloudy-high';
		case 803:
			return 'wi-day-sunny';
		case 802:
			return 'wi-day-sunny-overcast';
		case 611:
			return 'wi-rain-mix';
		case 612:
			return 'wi-rain-mix';
		case 501:
			return 'wi-day-rain';
		case 600:
			return 'wi-day-snow';
		case 231:
			return 'wi-day-storm-showers';
		case 232:
			return 'wi-day-storm-showers';
		case 233:
			return 'wi-day-storm-showers';
		case 751:
			return 'wi-day-fog';
		case 731:
			return 'wi-day-fog';
		case 711:
			return 'wi-day-fog';
		case 700:
			return 'wi-day-fog';
		case 623:
			return 'wi-day-rain';
		case 613:
			return 'wi-day-snow';
		case 522:
			return 'wi-day-rain';
		case 520:
			return 'wi-day-rain';
		case 511:
			return 'wi-day-rain';
		case 502:
			return 'wi-day-rain';
		case 500:
			return 'wi-day-rain';
		case 302:
			return 'wi-day-rain';
		case 301:
			return 'wi-day-rain';
		case 300:
			return 'wi-day-rain';
		case 230:
			return 'wi-day-storm-showers';
		case 201:
			return 'wi-day-storm-showers';
		case 200:
			return 'wi-day-storm-showers';
		default:
			return 'error';
	}
}

function createDay(day) {
	var datetime = day.datetime,
	    temp = day.temp,
	    weather = day.weather,
	    windSpd = day.wind_spd,
	    windDir = day.wind_cdir_full,
	    rh = day.rh,
	    pres = day.pres;

	var newDay = document.createElement('li');
	newDay.classList.add('results__day');
	addNewElement('p', 'day__temp', newDay, temp + '\xB0');
	addNewElement('p', 'day__description', newDay, weather.description);
	addNewElement('p', 'day__newDate', newDay, datetime);
	addNewElement('span', 'day__icon', newDay, weather.code);
	var dayCase = document.createElement('div');
	dayCase.classList.add('day__more');
	addNewElement('p', 'day__wind', dayCase, 'Wind: ' + windSpd);
	addNewElement('p', 'day__windDir', dayCase, 'Direction: ' + windDir);
	addNewElement('p', 'day__day__pressure', dayCase, 'Pressure: ' + pres);
	addNewElement('p', 'day__precipitation', dayCase, 'Humidity: ' + rh); // ZMIEŃ !
	newDay.appendChild(dayCase);
	return newDay;
}

exports.createDay = createDay;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createList = undefined;

var _Day = require('../DayList/Day/Day');

var _SourceLink = require('../SourceLink/SourceLink');

// create list function, argument - object from api request
// if user wants to check forecast daily weather
function createList(datas) {
	if (_SourceLink.resultsCase.querySelector('li') != null || _SourceLink.resultsCase.querySelector('div') != null) {
		_SourceLink.resultsCase.innerHTML = ''; // clear old informations
	}

	var newList = document.createElement('ul'); // create new list 
	newList.classList.add('results__list');
	datas.data.forEach(function (day) {
		newList.appendChild((0, _Day.createDay)(day));
	});
	_SourceLink.resultsCase.appendChild(newList);
	console.log(_SourceLink.resultsCase.childNodes[0]);
	var days = document.querySelectorAll('.results__day');
	days.forEach(function (day) {
		day.addEventListener('click', function () {
			day.classList.toggle('results__day--more');
		});
	});
	newList.childNodes[0].classList.add('results__day--today');
}

exports.createList = createList;

},{"../DayList/Day/Day":3,"../SourceLink/SourceLink":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.searchCity = undefined;

var _APIRequest = require('../APIRequest/APIRequest');

var _ShowDatas = require('../ShowDatas/ShowDatas');

// searchInput method using readData from APIRequest (readData returns Promise)

function searchCity(url, type) {
	(0, _APIRequest.readData)(url).then(function (res) {
		return res;
	}).then(function (res) {
		(0, _ShowDatas.showDatas)(res, type); // function with switch case for type
	}).catch(function (rej) {
		return rej;
	});
}

exports.searchCity = searchCity;

},{"../APIRequest/APIRequest":2,"../ShowDatas/ShowDatas":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showDatas = undefined;

var _DayList = require('../DayList/DayList');

function showDatas(obj, type) {
	switch (type) {
		case 'forecast/daily':
			(0, _DayList.createList)(obj);
			break;
		default:
			console.log('Error! Undefined type!');
			break;
	}
} // switch case for type request
exports.showDatas = showDatas;

},{"../DayList/DayList":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// main case to show informations
var resultsCase = document.querySelector('.results');

// link constructor

var SourceLink = function () {
	function SourceLink(type, city, key) {
		_classCallCheck(this, SourceLink);

		this.type = type;
		this.city = city;
		this.key = key;
	}

	_createClass(SourceLink, [{
		key: 'addName',
		value: function addName() {
			var cityName = document.createElement('p');
			var curDate = document.createElement('p');
			cityName.classList.add('day__city');
			cityName.textContent = this.city;
			curDate.classList.add('day__date');
			curDate.textContent = new Date().toDateString();
			if (resultsCase.querySelector('p') != null) resultsCase.innerHTML = '';
			resultsCase.appendChild(cityName);
			resultsCase.appendChild(curDate);
		}
	}, {
		key: 'createLink',
		value: function createLink() {
			return 'https://api.weatherbit.io/v2.0/' + this.type + '?city=' + this.city + '&lang=en&key=' + this.key;
		}
	}]);

	return SourceLink;
}();

exports.SourceLink = SourceLink;
exports.resultsCase = resultsCase;

},{}]},{},[1]);
