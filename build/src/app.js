(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _SearchBar = require('./components/SearchBar/SearchBar');

var _SourceLink = require('./components/SourceLink/SourceLink');

var _CurrentDay = require('./components/CurrentDay/CurrentDay');

var key = "77495ca5727d41468325a028e4c74bcf";

var submitKey = document.querySelector('.weatherForm__submit');
submitKey.addEventListener("click", function (e) {
	e.preventDefault();
	var cityName = document.querySelector('.weatherForm__input').value;
	var newUrl = new _SourceLink.SourceLink("current", cityName, key);
	(0, _SearchBar.searchCity)(newUrl.createLink());
});

},{"./components/CurrentDay/CurrentDay":3,"./components/SearchBar/SearchBar":4,"./components/SourceLink/SourceLink":6}],2:[function(require,module,exports){
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
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var showCurrentDay = function showCurrentDay(obj) {
	console.log(obj);
};

exports.showCurrentDay = showCurrentDay;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.searchCity = undefined;

var _APIRequest = require('../APIRequest/APIRequest');

var _ShowDatas = require('../ShowDatas/ShowDatas');

// searchInput method using readData from APIRequest 
// (readData returns Promise)
function searchCity(url) {
	console.log("Sending a query to the API");
	(0, _APIRequest.readData)(url).then(function (res) {
		console.log("Sending a query completed successfully");
		return res;
	}).then(function (res) {
		(0, _ShowDatas.showDatas)(res);
	}).catch(function (rej) {
		console.log("Query sending failed");
		return rej;
	});
}

exports.searchCity = searchCity;

},{"../APIRequest/APIRequest":2,"../ShowDatas/ShowDatas":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var showDatas = function showDatas(obj) {
	console.log(obj);
};

exports.showDatas = showDatas;

},{}],6:[function(require,module,exports){
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
