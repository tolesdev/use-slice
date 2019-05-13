# useSlice
>A lightweight local state management hook.  Heavily inspired by [redux-starter-kit](https://redux-starter-kit.js.org/introduction/quick-start).
>See [`createSlice`](https://redux-starter-kit.js.org/api/createslice).
## Usage
### `useSlice(initialState, reducers)`
### Parameters
* **initialState** *{object}* - The initial state of your slice.

* **reducers** *{object}* - An object of functions that perform an action to update state.

## Example
```jsx
import { useSlice } from 'use-slice';

function EditInfo() {
    // Default state of a our slice (person)
    const initialState = { name: '', birthdate: '', age: '' }

    // Actions that can be performed on our slice of state
    const reducers = {
        setName(state, name) {
            state.name = name
            return state
        },
        setBirthdate(state, birthdate) {
            state.birthdate = birthdate;
            state.age = getYearsSince(birthdate);
            return state
        },
    };

    // The current state of our slice, the dispatcher, and its actions
    const [state, dispatch, actions] = useSlice(initialState, reducers)
    const { name, birthdate, age } = state;
    const { setName, setBirthdate } = actions;

    // Handlers that can be used to update our slice
    const updateName = name => dispatch(setName(name))
    const updateBirthdate = birthdate => dispatch(setBirthdate(birthdate))

    return ( ... );
}
```