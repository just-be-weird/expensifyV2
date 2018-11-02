import React from 'react';
import { connect } from 'react-redux';
import { removeExpenseAG } from '../actions/expensesAG'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (//as dispatch is on props 
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={(e)=>{
            dispatch(removeExpenseAG({ id }));
        }}>x</button>
    </div>
);

export default connect()(ExpenseListItem);