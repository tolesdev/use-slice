import React, { useReducer } from 'react';
import createActions from './utils/createActions';
import createReducer from './utils/createReducer';

function useSlice(initialState = {}, actions) {
    const actionCreators = createActions(actions);
    const reducer = createReducer(actions);
    const [state, dispatch] = useReducer(reducer, initialState);
    return [state, dispatch, actionCreators];
}

export default useSlice;