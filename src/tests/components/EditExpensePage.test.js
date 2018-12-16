import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpenseAG, removeExpenseAG, history, wrapper;

beforeEach(() => {
    editExpenseAG = jest.fn();
    removeExpenseAG = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
    <EditExpensePage
      editExpenseAG={editExpenseAG}
      removeExpenseAG={removeExpenseAG}
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

test('should handle removeExpenseAG', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpenseAG).toHaveBeenLastCalledWith({
    id: expenses[2].id
  });
});