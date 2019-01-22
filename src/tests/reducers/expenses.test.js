import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses'; 
import moment from 'moment';

test('should set default state', ()=> {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    // const action = {
    //     type: 'ADD_EXPENSE',
    //     expense
    // };
    // const expenses = expensesReducer([],action);
    expect(state).toEqual([]);

});

test('should remove expenses by id', function () {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses by id if expense is not found', function () {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '4'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', function() {
    const expense = {
        id: '234',
        description : 'Test expense',
        note : 'jest',
        amount : 0,
        createdAt : 0
    };
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,expense]);
});

test('should edit an expense', function() {
    const action = {
        type: "EDIT_EXPENSE",
            id: expenses[2].id,
           updates: {
            description : 'Test expense with some updates',
            note : ' note was edited'
           }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1],{...expenses[2], description : 'Test expense with some updates',
    note : ' note was edited'}]);
});

test('should not edit an expense', function() {
    const action = {
        type: "EDIT_EXPENSE",
            id: '234',
           updates: {
            description : 'Test expense with some updates',
            note : ' note was edited'
           }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});


// {
//     description = 'Test expense',
//     note = 'jest',
//     amount = 0,
//     createdAt = 0
// }