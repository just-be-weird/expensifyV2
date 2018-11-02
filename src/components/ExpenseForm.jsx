import React from 'react';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            note: '',
            amount:''
        }
        this.onDescriptionHandler = this.onDescriptionHandler.bind(this);
        this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
        this.validateNumberOnChangeHandler = this.validateNumberOnChangeHandler.bind(this);
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
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(()=> ({ amount }));
        }
    }
    render() {
        return (
            <div>
                <form>
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