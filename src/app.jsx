import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpenseAG } from './actions/expensesAG';
import { setTextFilterAG } from './actions/filtersAG';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import './firebase/firebase';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// store.dispatch(addExpenseAG({
//     description: 'Nov JIO bill',
//     note: 'This was the gas bill payment for the feb month #SO1256.',
//     amount: 499,
//     createdAt: 2601
// }));
store.subscribe(()=>{
    const state = store.getState()
    console.log(state);
    // console.log(getVisibleExpenses(state.expenses, state.filters));
})
// store.dispatch(setTextFilterAG('bill'));
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));