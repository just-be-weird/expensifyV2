import React from 'react';
import { connect } from 'react-redux';
import { setTextFilterAG, sortByDateAG, sortByAmountAG} from "../actions/filtersAG";//throws type error if not used { } while using named exports.

const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            defaultValue={props.filters.text} //controlled IP -> when value is controlled by JS
            onChange={(e)=> {
                props.dispatch(setTextFilterAG(e.target.value));
            }}
        />
        <select 
            value={props.filters.sortBy}
            onChange={(e)=>{
            if ( e.target.value == 'amount') {
                    props.dispatch(sortByAmountAG());
                } else if (e.target.value == 'date') {
                    props.dispatch(sortByDateAG());
                }
            }}
        >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
    </div>
);
const mapStoreStateToComponentProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStoreStateToComponentProps)(ExpenseListFilters);