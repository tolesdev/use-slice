import React, { useReducer } from 'react';
import createActions from './utils/createActions';
import createReducer from './utils/createReducer';

function useSlice(initialState = {}, reducers) {
    const actionCreators = createActions(reducers);
    const reducer = createReducer(reducers);
    const [state, dispatch] = useReducer(reducer, initialState);
    return [state, dispatch, actionCreators];
}

export default useSlice;