import uuid from 'uuid';
import database from '../firebase/firebase';//default import

/**
 * component calls action generator
 * action generator then returns object
 * component dispatches objects
 * redux store changes
 * 
 * --- above steps changes if implement firbase
 * 
 * component calls action generator
 * action generator then returns function
 * component dispatches function (?) //btw redux doesn't allow by default dispatching functions so we need a redux module which will provide support for this behaviour
 * 
 * function runs (has the ability to dispatch other actions and do whatever it wants)
 * 
 */

// ADD_EXPENSE action genrator
//Every AG needs type property to be set and return
export const addExpenseAG = ( expense ) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpenseAG = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { amount, createdAt, description, note };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpenseAG({
                id: ref.key,
                ...expense
            }));
        });
    }
};

// REMOVE_EXPENSE action genrator
export const removeExpenseAG = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE action genrator
export const editExpenseAG = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});