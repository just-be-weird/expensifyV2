import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilterAG, sortByDateAG, sortByAmountAG, setStartDateAG, setEndDateAG } from "../actions/filtersAG";//throws type error if not used { } while using named exports.

export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
        this.onSortChangeHandler = this.onSortChangeHandler.bind(this);
        this.state = {
            calendarFocused: null
        }
    }
    onTextChangeHandler(e) {
        this.props.setTextFilterAG(e.target.value);//dispatch is avialable on props & is passed by redux store.
    }
    onSortChangeHandler(e) {
        if ( e.target.value == 'amount') {
                this.props.sortByAmountAG();
            } else if (e.target.value == 'date') {
                this.props.sortByDateAG();
            }
        }
    onDatesChange({ startDate, endDate }) {
        this.props.setStartDateAG(startDate);
        this.props.setEndDateAG(endDate);
    }
    onFocusChange(focusedInput) {
        this.setState(() => ({ calendarFocused: focusedInput }));
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    defaultValue={this.props.filters.text} //controlled IP -> when value is controlled by JS
                    onChange={this.onTextChangeHandler}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChangeHandler}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false }
                />
            </div>
        );
    }
}
const mapStoreStateToComponentProps = (state) => {
    return {
        filters: state.filters
    }
}
const mapDispatchToComponentProps = (dispatch) => {
    return {
        setStartDateAG: (startDate) => dispatch(setStartDateAG(startDate)),
        setEndDateAG: (endDate) => dispatch(setEndDateAG(endDate)),
        setTextFilterAG: (text) => dispatch(setTextFilterAG(text)),
        sortByAmountAG: () => dispatch(sortByAmountAG()),
        sortByDateAG: () => dispatch(sortByDateAG())


    }
}

export default connect(mapStoreStateToComponentProps, mapDispatchToComponentProps)(ExpenseListFilters);