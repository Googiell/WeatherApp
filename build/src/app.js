(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _SearchBar = require('./components/SearchBar/SearchBar');

var _SourceLink = require('./components/SourceLink/SourceLink');

// main js file
var key = '77495ca5727d41468325a028e4c74bcf'; // API key

var submitKey = document.querySelector('.weatherForm__submit');
submitKey.addEventListener('click', function (e) {
	e.preventDefault();
	var type = submitKey.dataset.searchoption;
	var cityName = document.querySelector('.weatherForm__input').value;
	var newUrl = new _SourceLink.SourceLink(type, cityName, key);
	(0, _SearchBar.searchCity)(newUrl.createLink(), type);
});

// radio elements handling
var optionFormRadio = document.querySelectorAll('.weatherForm__radio');
optionFormRadio.forEach(function (radio) {
	radio.addEventListener('change', function () {
		console.log('zmiana na');
		console.log(radio.value);
		submitKey.dataset.searchoption = radio.value; // change type of request and save to submitKey data
	});
});

},{"./components/SearchBar/SearchBar":6,"./components/SourceLink/SourceLink":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// promise with XMLHttpRequest async

function readData(url) {
	return new Promise(function (resolve, reject) {
		var req = new XMLHttpRequest();
		req.open('GET', url);
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
exports.showCurrentDay = undefined;

var _SourceLink = require('../SourceLink/SourceLink');

function showCurrentDay(day) {
	if (_SourceLink.resultsCase.querySelector('li') != null || _SourceLink.resultsCase.querySelector('div') != null) {
		_SourceLink.resultsCase.innerHTML = ''; // clear old informations
	}
	console.log(day);
	// destructuring to catch needed informations
	var cityName = day.city_name,
	    countryCode = day.country_code,
	    datetime = day.datetime,
	    temp = day.temp,
	    weather = day.weather,
	    appTemp = day.app_temp,
	    windSpd = day.wind_spd,
	    windDir = day.wind_cdir_full,
	    rh = day.rh,
	    pres = day.pres;

	var newDay = document.createElement('div');
	var infoParagraph = document.createElement('p');
	infoParagraph.classList.add('results__info');
	infoParagraph.textContent = '\n\tCurrent weather in ' + cityName + ' ' + countryCode + '\n\t' + datetime + '\n\t';

	var mainInfoParagraph = document.createElement('p');
	mainInfoParagraph.classList.add('results__mainInfo');
	mainInfoParagraph.textContent = '\n\t' + temp + String.fromCharCode(176) + ' \n\t' + weather.description + '\n\t'; // 176 - asci degrees

	var contentParagraph = document.createElement('p');
	contentParagraph.classList.add('results__content');
	var text = '\n\tOdczuwalna: ' + appTemp + '\n\tWiatr: ' + windSpd + ' m/s Kierunek: ' + windDir + ' \n\tWilgotno\u015B\u0107: ' + rh + ' \n\tCi\u015Bnienie: ' + pres + '\n\t';
	contentParagraph.textContent = text;

	newDay.appendChild(infoParagraph);
	newDay.appendChild(mainInfoParagraph);
	newDay.appendChild(contentParagraph);
	_SourceLink.resultsCase.appendChild(newDay);
} // if user wants to check current weather
exports.showCurrentDay = showCurrentDay;

},{"../SourceLink/SourceLink":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function createDay(day) {
	var datetime = day.datetime,
	    temp = day.temp,
	    tempMin = day.app_min_temp,
	    tempMax = day.app_max_temp,
	    weather = day.weather,
	    windSpd = day.wind_spd,
	    windDir = day.wind_cdir_full,
	    rh = day.rh,
	    pres = day.pres;

	var newDay = document.createElement('li');
	var contentParagraph = document.createElement('p');
	contentParagraph.textContent = 'Data: ' + datetime + '\n\t\tTemperatura: od ' + tempMin + ' do ' + tempMax + '\n\t\tStan: ' + weather.description + '\n\t\tOdczuwalna: ' + temp + ' \n\t\tWiatr: ' + windSpd + ' m/s Kierunek: ' + windDir + '\n\t\tWilgotno\u015B\u0107: ' + rh + '\n\t\tCi\u015Bnienie: ' + pres;
	newDay.appendChild(contentParagraph);
	return newDay;
}

exports.createDay = createDay;

},{}],5:[function(require,module,exports){
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
	datas.data.forEach(function (day) {
		newList.appendChild((0, _Day.createDay)(day));
	});
	_SourceLink.resultsCase.appendChild(newList);
}

exports.createList = createList;

},{"../DayList/Day/Day":4,"../SourceLink/SourceLink":8}],6:[function(require,module,exports){
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
		changeFormView();
	}).catch(function (rej) {
		return rej;
	});
}

exports.searchCity = searchCity;

},{"../APIRequest/APIRequest":2,"../ShowDatas/ShowDatas":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showDatas = undefined;

var _DayList = require('../DayList/DayList');

var _CurrentDay = require('../CurrentDay/CurrentDay');

// switch case for type request
function showDatas(obj, type) {
	switch (type) {
		case 'current':
			(0, _CurrentDay.showCurrentDay)(obj.data[0]);
			break;
		case 'forecast/daily':
			(0, _DayList.createList)(obj);
			break;
		default:
			console.log('Error! Undefined type!');
			break;
	}
}

exports.showDatas = showDatas;

},{"../CurrentDay/CurrentDay":3,"../DayList/DayList":5}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// link constructor
var SourceLink = function () {
	function SourceLink(type, city, key) {
		_classCallCheck(this, SourceLink);

		this.type = type;
		this.city = city;
		this.key = key;
	}

	_createClass(SourceLink, [{
		key: 'createLink',
		value: function createLink() {
			return 'https://api.weatherbit.io/v2.0/' + this.type + '?city=' + this.city + '&lang=pl&key=' + this.key;
		}
	}]);

	return SourceLink;
}();

// main case to show informations


var resultsCase = document.querySelector('.results');

exports.SourceLink = SourceLink;
exports.resultsCase = resultsCase;

},{}]},{},[1]);
