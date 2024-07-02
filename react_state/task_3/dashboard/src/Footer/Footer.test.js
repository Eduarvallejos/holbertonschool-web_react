import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('Footer component', () => {
    it('renders without crashing', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: jest.fn() }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the text "Copyright"', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: jest.fn() }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.text()).toContain('Copyright');
    });

    it('does not display the contact link when user is logged out', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: jest.fn() }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a[href="/contact"]').exists()).toBe(false);
    });

    it('displays the contact link when user is logged in', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a[href="/contact"]').exists()).toBe(true);
    });
});
