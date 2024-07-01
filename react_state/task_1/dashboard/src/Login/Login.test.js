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
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders 3 input tags and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(3);
        expect(wrapper.find('label').length).toBe(2);
    });

    it('submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBe(true);
    });

    it('submit button is enabled after changing the value of the two inputs', () => {
        const wrapper = shallow(<Login />);
        
        const emailInput = wrapper.find('input[type="email"]');
        const passwordInput = wrapper.find('input[type="password"]');

        emailInput.simulate('change', { target: { value: 'test@example.com' } });
        passwordInput.simulate('change', { target: { value: 'password123' } });

        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBe(false);
    });
});
