import React from 'react';
import { shallow } from "enzyme";
import PageNotFoundPage from "../../components/PageNotFoundPage";

test('should render PageNotFoundPage', () => {
    const wrapper = shallow(<PageNotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})