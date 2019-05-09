import createReducer from './createReducer';
import { actions as testActions } from './testing';

describe('createReducer', () => {
    describe('actions', () => {
        it('should return an object of action methods', () => {
            const reducer = createReducer(testActions);
        });
    });
});