import { createStore } from 'redux';

//Action Generators -> xAG
const incrementByAG = ( {incrementBy = 1} = {}) => ({//first check for incrementBy if its passed use that else default it to 1. If whole object is not passed then default it to empty one and on then set incrementBy with value 1.
    type:"INCREMENT",
    incrementBy // same as incrementBy: incrementBy
});

const decrementByAG = ( {decrementBy = 1} = {}) => ({
    type:"DECREMENT",
    decrementBy 
});

const setAG = ( { setCount }) => ({//as we want user should always pass a value while calling this AG so won't use object destructuring and defaults.
    type: 'SET',
    setCount
});
const resetAG = () => ({ type: 'RESET' });
/**
 * --- Reducers ---
 * 1. They are pure functions -> functions which don't depend on outer scope for their O/P they only depned on I/P for O/P.
 *  ex of not pure func :
 *  let a = 23;
 *  const add = (b) => a + b;
 *  add(10) -> here add depends on a for its OP so its not PURE Function.
 * 
 * 2.Never change state and actions directly 
 *  */

const storeReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
            case 'SET':
            return {
                count: action.setCount
            }
        default:
            return state;
    }
};

const store = createStore(storeReducer);
 /**
  * return a function which then can be used for unsubscribing
  * just by callin it like -> unsubscribe() , this stop subscriptions
 * */
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementByAG({incrementBy: 5}));
store.dispatch(incrementByAG())
// unsubscribe();//if i call unsubscribe here all other dispatch will not show console log in subscribe
// console.log("count:", store.getState());
store.dispatch(decrementByAG({ decrementBy: 2 }));
store.dispatch(resetAG());
store.dispatch(setAG({setCount: 1190}));
