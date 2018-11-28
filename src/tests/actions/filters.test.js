import moment from 'moment';
import { 
        setEndDateAG, 
        setStartDateAG, 
        setTextFilterAG, 
        sortByAmountAG, 
        sortByDateAG 
    } from '../../actions/filtersAG';

test('This should set filter to use end date', () => {
    const filterResult = setEndDateAG(moment(0));
    expect(filterResult).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('This should set filter to use start date', () => {
    const filterResult = setStartDateAG(moment(0));
    expect(filterResult).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('This should set text filter using passed value', () => {
    const text = 'rent',
        textFilterResult = setTextFilterAG(text);
    expect(textFilterResult).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});

test('This should set text filter using default value', () => {
    const textFilterResult = setTextFilterAG();
    expect(textFilterResult).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('This should sort text filter using passed value for amount', () => {
    expect(sortByAmountAG()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('This should sort text filter using passed value for date', () => {
    expect(sortByDateAG()).toEqual({ type: 'SORT_BY_DATE' });
});