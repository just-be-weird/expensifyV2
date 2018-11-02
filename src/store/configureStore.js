import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

//Store creation

export default () => {
    // const store = createStore(expensesReducer);
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,//root_stateProperty: reducer which will manage it
            filters: filtersReducer
        })
    );
    
    return store;
}
