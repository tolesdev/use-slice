import produce from 'immer';

export default actions => {
    return (state, action) => {
        /**
         * type: Action types should be the same name as their functions.
         * payload: The payload sent with the action.
         */
        if (state && action) {
            const { type, payload } = action;
            const fn = actions[type];
            
            if (typeof fn === 'function') {                
                const nextState = produce(state, draft => {
                    fn(draft, payload);
                });
                return nextState;
            }
            else {
                return state;
                // or error
            }
        }
    }
};