import produce from 'immer';

/**
 * Creates a single reducer from all of the action reducers.
 * @param {object} actionReducers - Object of reducer functions
 * @returns {function} reducer
 */
const createReducer = actionReducers => {
    /**
     * Reducer function that combines all the action reducers.
     * @param {object} state - The current state object
     * @param {object} action - The action to perform
     *   type: Action types should be the same name as their functions.
     *   payload: The payload sent with the action.
     */
    const reducer = (state, action) => {
        if (state && action) {
            const { type, payload } = action;
            // Get our actual reducer function for this action type
            const reducer = actionReducers[type];

            // No reducer was defined for the type of action being dispatched
            if (reducer === undefined) {
                throw new Error('The reducer for this action could not be found, check the reducers being passed to useSlice.');
            }
            // Invoke the reducer!
            if (typeof reducer === 'function') {
                // Create a new copy of state with immer
                const nextState = produce(state, draft => {
                    reducer(draft, payload);
                });
                return nextState;
            }
            // The user must have misconfigured the action reducers and provided a non-function
            else {
                throw new Error('The reducer for this action must be a function, check the reducers being passed to useSlice.');
            }
        }
    }
    return reducer;
};

export default createReducer;