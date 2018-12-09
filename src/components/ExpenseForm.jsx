import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {// to access props we need to constructor function
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),//moment will creat 
            //time stamp at which line was ran as opposed to moment(timeStampForArgs) which will create
            // moment time stamp for passed time stamp
            calenderFocused: false,
            error: ''
        }
        this.onDescriptionHandler = this.onDescriptionHandler.bind(this);
        this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
        this.validateNumberOnChangeHandler = this.validateNumberOnChangeHandler.bind(this);
        this.onDateChangeHandler = this.onDateChangeHandler.bind(this);
        this.onFocusChangeHandler = this.onFocusChangeHandler.bind(this);
        this.submitHandeler = this.submitHandeler.bind(this);
    }
    onDescriptionHandler (e) {
        const description = e.target.value;
        this.setState(()=> ( { description } ));
    }
    onTextChangeHandler(e) {
        const note = e.target.value;// e.persist();
        this.setState(()=> ( { note }));// text: e.target.value will work 
    }
    validateNumberOnChangeHandler (e) {
        const amount = e.target.value;
        // console.log(!amount,amount.match(/^\d{1,}(\.\d{0,2})?$/));
        if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=> ({ amount }));
        }
    }
    onDateChangeHandler (createdAt) {  //react-dates passes the current moment value as arg and we can name it createdAt
        if (createdAt) {
            this.setState(()=> ( { createdAt } ));
        }
    }
    onFocusChangeHandler ( { focused }) {// called by react-dates 
        this.setState(()=> ( { calenderFocused: focused } ));
    }
    submitHandeler (e) {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(()=>( { error: "Please provide description and amount!"} ));
        } else {
            //to test this part will be using spies
            this.setState(()=>( { error: ""} ));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf()//refer moment docs
            })
        } 
    } 
    render() {
        return (
            <div>
                <p> {this.state.error && this.state.error}</p>
                <form onSubmit= {this.submitHandeler}>
                    <input
                        type="text"
                        placeholder="Enter Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionHandler}
                    />
                    <input
                        type="text"
                        placeholder="Enter Amount"
                        defaultValue=""
                        value={this.state.amount}
                        onChange={this.validateNumberOnChangeHandler}
                    />
                    <SingleDatePicker 
                        date= {this.state.createdAt}
                        onDateChange = { this.onDateChangeHandler }
                        focused = {this.state.calenderFocused}
                        onFocusChange = { this.onFocusChangeHandler}
                        numberOfMonths= {1}
                        isOutsideRange = { () => false }
                    />
                    <textarea
                        placeholder="Add a note for your expenses (optional)"
                        onChange={this.onTextChangeHandler}
                    ></textarea>
                    <button>Add Expense</button>

                </form>
            </div>
        );
    }
}