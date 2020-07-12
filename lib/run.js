"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _index = _interopRequireWildcard(require("./index"));

console.log((0, _index["default"])('cool', 15));
console.log((0, _stringify["default"])(_index.constants));