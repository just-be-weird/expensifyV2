import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpenseAG, startRemoveExpenseAG, history, wrapper;

beforeEach(() => {
    editExpenseAG = jest.fn();
    startRemoveExpenseAG = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
    <EditExpensePage
      editExpenseAG={editExpenseAG}
      startRemoveExpenseAG={startRemoveExpenseAG}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpenseAG', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpenseAG).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpenseAG', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpenseAG).toHaveBeenLastCalledWith({
    id: expenses[2].id
  });
});