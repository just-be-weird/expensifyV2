import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpenseAG, wrapper, history;

beforeEach(() => {
    addExpenseAG = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpenseAG={addExpenseAG} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpenseAG).toHaveBeenLastCalledWith(expenses[1]);
});