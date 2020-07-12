"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "constants", {
  enumerable: true,
  get: function get() {
    return _constants["default"];
  }
});

exports["default"] = void 0;

var _constants = _interopRequireDefault(require("./constants"));

var testDefault = function testDefault(name, age) {
  return {
    name: name,
    age: age
  };
};

var _default = testDefault;
exports["default"] = _default;
module.exports = exports.default;