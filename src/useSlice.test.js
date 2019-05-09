import useSlice from './useSlice';
import { reducers, initialState } from './utils/testing';
import { renderHook, act } from 'react-hooks-testing-library';

describe('useSlice', () => {
    test('only return new state object if a value changes', () => {
        const { result } = renderHook(() => useSlice(initialState, reducers));
        // We have to access state each time from result.current otherwise we have stale data
        const [ /** state */,dispatch,actions] = result.current;
        act(() => dispatch(actions.setColor('red')));
        expect(result.current[0]).toBe(initialState);
    });
    it('should return new state object if a value changes', () => {
        const { result } = renderHook(() => useSlice(initialState, reducers));
        // We have to access state each time from result.current otherwise we have stale data
        const [ /** state */,dispatch,actions] = result.current;
        act(() => dispatch(actions.setColor('blue')));
        expect(result.current[0]).not.toBe(initialState);
    });
});