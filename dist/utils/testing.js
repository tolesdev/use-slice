"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseState = exports.actions = void 0;
var actions = {
  setPayload: function setPayload(state, payload) {
    state.payload = payload;
    return state;
  },
  setShape: function setShape(state, payload) {
    state.shape = payload;
    return state;
  },
  setTexture: function setTexture(state, payload) {
    state.texture = payload;
    return state;
  },
  bad: 'data'
};
exports.actions = actions;
var baseState = {
  color: 'color',
  shape: 'shape',
  texture: 'texture'
};
exports.baseState = baseState;