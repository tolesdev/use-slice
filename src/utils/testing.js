import React from 'react';

export const reducers = {
    setColor(state, payload) {
        state.color = payload;
        return state;
    },
    setShape(state, payload) {
        state.shape = payload;
        return state;
    },
    setTexture(state, payload) {
        state.texture = payload;
        return state;
    },
    bad: 'data'
};

export const initialState = {
    color: 'red',
    shape: 'round',
    texture: 'rough',
};