import React from 'react';
import { shallow } from "enzyme";
import HelpDashboardPage from "../../components/HelpDashboardPage";

test('should render Expense Dashboard Page', () => {
    const wrapper = shallow(<HelpDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})