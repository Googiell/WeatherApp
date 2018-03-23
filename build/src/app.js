(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _SearchBar = require('./components/SearchBar/SearchBar');

var _SourceLink = require('./components/SourceLink/SourceLink');

var _CurrentDay = require('./components/CurrentDay/CurrentDay');

var key = "77495ca5727d41468325a028e4c74bcf";

var submitKey = document.querySelector('.weatherForm__submit');
submitKey.addEventListener("click", function (e) {
	e.preventDefault();
	var type = submitKey.dataset.searchoption;
	var cityName = document.querySelector('.weatherForm__input').value;
	var newUrl = new _SourceLink.SourceLink(type, cityName, key);
	(0, _SearchBar.searchCity)(newUrl.createLink(), type);
});

var optionFormRadio = document.querySelectorAll(".optionForm__radio");
optionFormRadio.forEach(function (radio) {
	radio.addEventListener("change", function () {
		submitKey.dataset.searchoption = this.value;
	});
});

},{"./components/CurrentDay/CurrentDay":3,"./components/SearchBar/SearchBar":6,"./components/SourceLink/SourceLink":8}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// promise with XMLHyypRequest async
function readData(url) {
	return new Promise(function (resolve, rejest) {
		var req = new XMLHttpRequest();
		req.open("GET", url);
		req.addEventListener("load", function () {
			return resolve(JSON.parse(req.responseText));
		});
		req.addEventListener("error", function () {
			return reject(req.statusText);
		});
		console.log("Sending request from APIRequest.js");
		req.send();
	});
}

exports.readData = readData;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var showCurrentDay = function showCurrentDay(day) {
	var results = document.querySelector(".results");
	if (results.querySelector('li') != null) ;
	results.innerHTML = '';
	console.log("I will create new day!");
	var datetime = day.datetime,
	    temp = day.temp,
	    app_min_temp = day.app_min_temp,
	    app_max_temp = day.app_max_temp,
	    weather = day.weather,
	    description = day.description,
	    app_temp = day.app_temp,
	    wind_spd = day.wind_spd,
	    wind_cdir_full = day.wind_cdir_full,
	    rh = day.rh,
	    pres = day.pres;

	var newDay = document.createElement("li");
	var contentParagraph = document.createElement("p");
	console.log(day);
	contentParagraph.textContent = 'Data: ' + datetime + '\n\t\tTemperatura: ' + temp + '\n\t\tStan: ' + weather.description + '\n\t\tOdczuwalna: ' + app_temp + ' \n\t\tWiatr: ' + wind_spd + ' m/s Kierunek: ' + wind_cdir_full + '\n\t\tWilgotno\u015B\u0107: ' + rh + '\n\t\tCi\u015Bnienie: ' + pres;

	newDay.appendChild(contentParagraph);
	results.appendChild(newDay);
};

exports.showCurrentDay = showCurrentDay;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var createDay = function createDay(day) {
	console.log("I will create new day!");
	var datetime = day.datetime,
	    temp = day.temp,
	    app_min_temp = day.app_min_temp,
	    app_max_temp = day.app_max_temp,
	    weather = day.weather,
	    description = day.description,
	    app_temp = day.app_temp,
	    wind_spd = day.wind_spd,
	    wind_cdir_full = day.wind_cdir_full,
	    rh = day.rh,
	    pres = day.pres;

	var newDay = document.createElement("li");
	var contentParagraph = document.createElement("p");

	contentParagraph.textContent = "Data: " + datetime + "\n\t\tTemperatura: od " + app_min_temp + " do " + app_max_temp + "\n\t\tStan: " + weather.description + "\n\t\tOdczuwalna: " + temp + " \n\t\tWiatr: " + wind_spd + " m/s Kierunek: " + wind_cdir_full + "\n\t\tWilgotno\u015B\u0107: " + rh + "\n\t\tCi\u015Bnienie: " + pres;

	newDay.appendChild(contentParagraph);
	return newDay;
};

exports.createDay = createDay;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createList = undefined;

var _Day = require('../DayList/Day/Day');

// create list function, argument - object from api request
var createList = function createList(datas) {
	var results = document.querySelector(".results");
	if (results.querySelector('li') != null) ;
	results.innerHTML = '';
	var newList = document.createElement("ul");
	datas.data.forEach(function (day) {
		newList.appendChild((0, _Day.createDay)(day));
	});
	results.appendChild(newList);
};

exports.createList = createList;

},{"../DayList/Day/Day":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.searchCity = undefined;

var _APIRequest = require('../APIRequest/APIRequest');

var _ShowDatas = require('../ShowDatas/ShowDatas');

// searchInput method using readData from APIRequest 
// (readData returns Promise)
function searchCity(url, type) {
	console.log("Sending a query to the API");
	(0, _APIRequest.readData)(url).then(function (res) {
		console.log("Sending a query completed successfully");
		return res;
	}).then(function (res) {
		(0, _ShowDatas.showDatas)(res, type);
	}).catch(function (rej) {
		console.log("Query sending failed");
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

var showDatas = function showDatas(obj, type) {
	console.log('switchuje ' + type);
	switch (type) {
		case 'current':
			(0, _CurrentDay.showCurrentDay)(obj.data[0]);
			break;
		case 'forecast/daily':
			(0, _DayList.createList)(obj);
			break;
		default:
			console.log("Error! Undefined type!");
			break;
	}
};

// const namesOfAWeek = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];

exports.showDatas = showDatas;

},{"../CurrentDay/CurrentDay":3,"../DayList/DayList":5}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SourceLink = function () {
	function SourceLink(type, city, key) {
		_classCallCheck(this, SourceLink);

		this.type = type;
		this.city = city;
		this.key = key;
	}

	_createClass(SourceLink, [{
		key: "createLink",
		value: function createLink() {
			return "https://api.weatherbit.io/v2.0/" + this.type + "?city=" + this.city + "&lang=pl&key=" + this.key;
		}
	}]);

	return SourceLink;
}();

exports.SourceLink = SourceLink;

},{}]},{},[1]);
