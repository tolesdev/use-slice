"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(actions) {
  return function (state, action) {
    /**
     * type: Action types should be the same name as their functions.
     * payload: The payload sent with the action.
     */
    if (state && action) {
      var type = action.type,
          payload = action.payload;
      var fn = actions[type];

      if (typeof fn === 'function') {
        // TODO: Use immerjs
        return _objectSpread({}, fn(state, payload));
      } else {
        return state; // or error
      }
    }
  };
};

exports["default"] = _default;