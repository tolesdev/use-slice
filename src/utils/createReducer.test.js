import createReducer from './createReducer';
import { reducers } from './testing';

describe('createReducer', () => {
    const state = { color: null };
    it('should throw if there is no reducer for the action', () => {
        const action = { type: 'bad_action', payload: 'nothing good'};
        const reducer = createReducer(reducers);
        expect(() => {
            reducer(state, action);
        }).toThrow();
    });
    it('should throw if the reducer is not a function', () => {
        const action = { type: 'bad', payload: 'doesnt matter'};
        const reducer = createReducer(reducers);
        expect(() => {
            reducer(state, action);
        }).toThrow();
    });
    it('should return a function', () => {
        expect(createReducer(reducers)).toBeFunction();
    });
    describe('reducer', () => {
        const action = { type: 'setColor', payload: 'red' };
        it('should update state', () => {
            const reducer = createReducer(reducers);
            const result = reducer(state, action);
            expect(result.color).toBe(action.payload);
        });
        it('should return a new state object', () => {
            const reducer = createReducer(reducers);
            const result = reducer(state, action);
            expect(result).not.toBe(state);
        });
    })
});