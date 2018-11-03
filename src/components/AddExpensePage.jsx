import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { addExpenseAG } from '../actions/expensesAG'


const AddExpensePage = (props) => (
    <div>
        <h3>Add Expense</h3>
        <ExpenseForm 
            onSubmit={ (expense)=> {//we are passing it down where this component actually lives, 
            // there we can access it as this.props.onSubmit | here arg expense will be passed
            // from expense form as it has access to those and our function will use it in here.
                // console.log(expense);
                props.dispatch(addExpenseAG(expense));
                props.history.push('/');
            }}
        />

    </div>
);

export default connect()(AddExpensePage);