/**
 * Creates actions from the action reducers.
 * @param {object} actionReducers - Object of reducer functions
 * @returns {object} actions
 */
const createActions = actionReducers => {
    const actions = Object.keys(actionReducers);
    // Compile an object of actions for our reducer
    return actions.reduce((actionCreators, action) => {
        // Create an action object for each action type
        actionCreators[action] = payload => ({ type: action, payload })
        return actionCreators;
    }, {});
};

export default createActions;