import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

test('should render Expense form', () => {
    const wrapper = shallow(< ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render passed expense data', () => {
    const wrapper = shallow(< ExpenseForm expense = {expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render for invalid form submission', () => {
    const wrapper = shallow(< ExpenseForm />);
    expect(wrapper).toMatchSnapshot();//this is to create sanp b4 submit event
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    // expect(wrapper.state('error')).toBe('Please provide description and amount!'); 
    expect(wrapper.state('error').length).toBeGreaterThan(0); 
    expect(wrapper).toMatchSnapshot();// this to to create snap after submit event
});

test('should set description on change of input', () => {
    const wrapper = shallow(< ExpenseForm />),
        value = 'New description value';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set textareas value on state.note, on change', () => {
    const value = 'value for textarea',
        wrapper = shallow(< ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set value if valid input', () => {
    const value = '45.69',
        wrapper = shallow(< ExpenseForm />);
    
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should set value if invalid input', () => {
    const value = '45.6999',
        wrapper = shallow(< ExpenseForm />);
    
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe("");
});

//https://jestjs.io/docs/en/expect -> toHaveBeenCalled and others
test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();//creating spy  then calling onsubmit to makes suer it gets called
    const wrapper = shallow(< ExpenseForm expense = { expenses[0] } onSubmit = {onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {//simulate the submit
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');//as data is valid we should not get any error
    expect(onSubmitSpy).toHaveBeenLastCalledWith({// our spy should get called with passed data
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

//Enzyme docs for find, at, props https://airbnb.io/enzyme/docs/api/shallow.html
test('should set new date on date change', () => {
    const wrapper = shallow(< ExpenseForm />),
        now = moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set new calender focus on change', () => {
    const wrapper = shallow(< ExpenseForm />),
    focused = true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused }); // onfucusChange expects an object with focused val
    expect(wrapper.state('calenderFocused')).toBe(focused);
});