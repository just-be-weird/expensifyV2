import React from 'react';
import { connect } from 'react-redux';
import { editExpenseAG,startRemoveExpenseAG } from '../actions/expensesAG'
import ExpenseForm from "./ExpenseForm";

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onRemove (e) {
        this.props.startRemoveExpenseAG({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    onSubmit (expense) {//refer AddExpensePage
        //dispatch the action for the edited expense
        //navigate to the dashboard page
            this.props.editExpenseAG(this.props.expense.id, expense);
            this.props.history.push('/');
    }

    render() {
        //get the expense pass it down to expenseform which will set it to state instead of using default props 
        return (
            <div>
                <ExpenseForm 
                    expense = {this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>x</button>
            </div>
        );
    }
}

const mapStoreStateToComponentProps = (state, props) => {// state from redux and props from HOC
    return {// find the expense from store then pass it to HOC
        expense: state.expenses.find(( expense ) =>  expense.id === props.match.params.id )
    }
}

const mapDispatchToComponentProps = (dispatch, props) => {
    return {
        editExpenseAG: (id, expense) => dispatch(editExpenseAG(id, expense)),
        startRemoveExpenseAG: (data) => dispatch(startRemoveExpenseAG(data))
    }
}
export default connect(mapStoreStateToComponentProps, mapDispatchToComponentProps)(EditExpensePage);