import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilterAG, sortByDateAG, sortByAmountAG, setStartDateAG, setEndDateAG } from "../actions/filtersAG";//throws type error if not used { } while using named exports.

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.state = {
            calenderFocused: null
        }
    }
    onDatesChange ({ startDate, endDate }) {
        this.props.dispatch(setStartDateAG(startDate));
        this.props.dispatch(setEndDateAG(endDate));
    }
    onFocusChange (focusedInput) {
        this.setState(() => ({ calenderFocused: focusedInput }));
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    defaultValue={this.props.filters.text} //controlled IP -> when value is controlled by JS
                    onChange={(e)=> {
                        this.props.dispatch(setTextFilterAG(e.target.value));//dispatch is avialable on props & is passed by redux store.
                    }}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e)=>{
                    if ( e.target.value == 'amount') {
                            this.props.dispatch(sortByAmountAG());
                        } else if (e.target.value == 'date') {
                            this.props.dispatch(sortByDateAG());
                        }
                    }}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
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

export default connect(mapStoreStateToComponentProps)(ExpenseListFilters);