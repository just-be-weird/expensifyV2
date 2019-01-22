// Expense Reducer
const expensesReducerStateDefaults = [];
// export const expensesReducer = (state = expensesReducerStateDefaults, action) => {
export default (state = expensesReducerStateDefaults, action) => {
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
        
        case 'SET_EXPENSES':
          return action.expenses;

        default:
            return state;
    }
};