import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';


beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

describe('Login component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Login/>);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders 2 input tags and 2 label tags', () => {
        const wrapper = shallow(<Login/>);
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find('label').length).toBe(2);
    });
});