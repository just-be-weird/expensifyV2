import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { startAddExpenseAG } from '../actions/expensesAG';

export class AddExpensePage extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(expense) { //we are passing it down where this component actually lives, 
        // there we can access it as this.props.onSubmit | here arg expense will be passed
        // from expense form as it has access to those and our function will use it in here.
        // console.log(expense);

        /**
        * props.dispatch(addExpenseAG(expense));

        * we are using another redux functionality refv124
            as we want to test this component but as we are importing addExpenseAG 
            it's bit difficutl to test this component. So use mapDispatchToProps an
            othr method provided by redux to help out while using dispatch.
        */
        this.props.startAddExpenseAG(expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3>Add Expense</h3>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpenseAG: (expense) => dispatch(startAddExpenseAG(expense))
});
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
/**
 * we are passing first arg as undefined as we don't wan't call mapStateToProps, 
 * and want to use mapDispatchToProps.
 */