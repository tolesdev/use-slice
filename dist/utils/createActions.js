"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(actions) {
  var keys = Object.keys(actions);
  return keys.reduce(function (creators, action) {
    creators[action] = function (payload) {
      return {
        type: action,
        payload: payload
      };
    };

    return creators;
  }, {});
};

exports["default"] = _default;