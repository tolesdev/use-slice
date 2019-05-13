import createActions from './createActions';
import { reducers } from './testing';

describe('createActions', () => {
    it('should return an object', () => {
        const actions = createActions(reducers);
        expect(actions).toBeInstanceOf(Object);
    });
    it('should have functions for values', () => {
        const actions = createActions(reducers);
        const actionValues = Object.values(actions);
        expect(actionValues).toSatisfyAll(val => typeof val === 'function');
    });
    test('action type should be action name', () => {
        const actions = createActions(reducers);
        expect(Object.entries(actions)).toSatisfyAll(([type, action]) => type === action().type);
    });
    test('action payload should be returned as payload property', () => {
        const payload = 'payload';
        const actions = createActions(reducers);
        expect(Object.values(actions)).toSatisfyAll(action => action(payload).payload === payload);
    });
});