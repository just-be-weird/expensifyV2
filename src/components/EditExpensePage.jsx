import React from 'react';
import { connect } from 'react-redux';
import { editExpenseAG,removeExpenseAG } from '../actions/expensesAG'
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = (props) => {
//get the expense pass it down to expenseform which will set it to state instead of using default props 
    return (
        <div>
            <ExpenseForm 
                expense = {props.expense}
                onSubmit={ (expense) => {//refer AddExpensePage
                //dispatch the action for the edited expense
                //navigate to the dashboard page
                    props.dispatch(editExpenseAG( props.expense.id, expense ))
                    props.history.push('/');
                }}
            />
            <button onClick={(e)=>{
                props.dispatch(removeExpenseAG( { id: props.expense.id } ));
                props.history.push('/');
            }}>x</button>
        </div>
    );
}

const mapStoreStateToComponentProps = (state, props) => {// state from redux and props from HOC
    return {// find the expense from store then pass it to HOC
        expense: state.expenses.find(( expense ) =>  expense.id === props.match.params.id )
    }
}
export default connect(mapStoreStateToComponentProps)(EditExpensePage);