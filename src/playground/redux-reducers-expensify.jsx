import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { type } from 'os';

// ADD_EXPENSE action genrator
//Every AG needs type property to be set and return
const addExpenseAG = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        amount,
        createdAt,
        description,
        id: uuid(),
        note
    }
});
// REMOVE_EXPENSE action genrator
const removeExpenseAG = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE action genrator
const editExpenseAG = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilterAG = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDateAG = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmountAG = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDateAG = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDateAG = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expense Reducer
const expensesReducerStateDefaults = [];
const expensesReducer = (state = expensesReducerStateDefaults, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense)
            return [...state, action.expense]//as we want to override the defaults

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);// true - show it and if false - don't show it in result.

        case 'EDIT_EXPENSE':
            return state.map((expense) => {//first check state -> expenses -> iterate as expense 
                if (expense.id === action.id) {//if its id matches with supplied one -> go for edits
                    return {
                        ...expense,//selected expense from state array
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });

        default:
            return state;
    }
};
const filtersReducerStatDefaults = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

// Filter Reducer
const filtersReducer = (state = filtersReducerStatDefaults, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }
};
// const store = createStore(expensesReducer);
const store = createStore(
    combineReducers({
        expenses: expensesReducer,//root_stateProperty: reducer which will manage it
        filters: filtersReducer
    })
);
//get visible expenses 
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLocaleLowerCase().includes(text.toLocaleLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {//if filter returns one line then that will be the result of sort as we can't compare it with itself
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log('Match :', visibleExpense);
});

const expense1 = store.dispatch(addExpenseAG({
    description: 'Jan Rent Pay',
    note: 'This was the final payment for this address.',
    amount: 12500,
    createdAt: 200893
}));

const expense2 = store.dispatch(addExpenseAG({
    description: 'FEB Rent Pay',
    note: 'This was the Feb payment for this address.',
    amount: 100,
    createdAt: 200493
}));

// store.dispatch(removeExpenseAG({ id: expense1.expense.id }));
store.dispatch(editExpenseAG(expense2.expense.id, { amount: 500 }));
// store.dispatch(setTextFilterAG('feb'));
// store.dispatch(sortByDateAG());
// store.dispatch(setStartDateAG(200593));

//how it will look like
const demoState = {
    expenses: [{
        id: '345',
        description: 'Jan Rent Pay',
        note: 'This was the final payment for this address.',
        amount: 12500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
