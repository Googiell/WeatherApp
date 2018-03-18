(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _SearchBar = require('./components/SearchBar/SearchBar');

var key = "77495ca5727d41468325a028e4c74bcf";

var submitKey = document.querySelector('.weatherForm__submit');
submitKey.addEventListener("click", function (e) {
	var cityName = document.querySelector('.weatherForm__input').value;
	var newUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + cityName + '&lang=pl&key=' + key;
	e.preventDefault();
	(0, _SearchBar.searchCity)(cityName, newUrl);
});

},{"./components/SearchBar/SearchBar":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
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
		req.send();
	});
}

exports.readData = readData;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.searchCity = undefined;

var _APIRequest = require('../APIRequest/APIRequest');

var newResolve = void 0;

function searchCity(cityName, newUrl) {
	(0, _APIRequest.readData)(newUrl).then(function (res) {
		console.log(res);
	}).catch(function (rej) {
		console.log(rej);
	});
}

exports.searchCity = searchCity;

},{"../APIRequest/APIRequest":2}]},{},[1]);
