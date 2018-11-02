import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../selectors/expenses';
const ExpenseList = (props) => (//unconnected component
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((expense)=> {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        }
    </div>
);

const mapStoreStateToComponentProps = (state) => {//in here what ever we want our component from store that thing we will tac on some prop and return it
    return {
        // expenses: state.expenses,
        expenses: visibleExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStoreStateToComponentProps)(ExpenseList);// @import ConnectedExpenseList
/**
 * its common practice to have mapStoreStateToComponentProps function
 * where we can decide which props will be passed to component which will be 
 * using it
 *  */