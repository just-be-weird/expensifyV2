import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//if redux devtool extension is avialable set that up else use redux's compose() 
//Store creation

export default () => {
    // const store = createStore(expensesReducer);
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,//root_stateProperty: reducer which will manage it
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}

/**
 * applyMiddleware lets u apply middleware like thunk
 */