import { addExpenseAG, removeExpenseAG, editExpenseAG } from '../../actions/expensesAG';
import expenses from '../../selectors/expenses';

test('This should setup remove expense action object', () => {
    const action = removeExpenseAG({id: 'abc11810'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc11810'
    })
});

test('This should test edit expense action object', () => {
    const result = editExpenseAG('abc18110',{ description: 'Nov JIO bill' });
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id : 'abc18110',
        updates: {
            description: 'Nov JIO bill'
        }
    });
});

test('This shuld setup add expense object with provided values', () => {
    const result = addExpenseAG({
        description: 'Nov JIO bill',
        note: 'This was the gas bill payment for the feb month #SO1256.',
        amount: 499,
        createdAt: 2601
    });
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Nov JIO bill',
            note: 'This was the gas bill payment for the feb month #SO1256.',
            amount: 499,
            createdAt: 2601
        }
    });
});

test('This shuld setup add expense object with default values', () => {
    const result = addExpenseAG({ //description: '' 
    });
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});