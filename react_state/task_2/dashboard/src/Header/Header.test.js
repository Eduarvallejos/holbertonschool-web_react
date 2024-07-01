import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, defaultUser, defaultLogOut } from '../App/AppContext';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('Header Component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an img and an h1', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('does not render logoutSection with default context value', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('renders logoutSection when isLoggedIn is true and email is defined', () => {
    const user = { email: 'test@example.com', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user: user, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  it('calls logOut function when logoutSection link is clicked', () => {
    const user = { email: 'test@example.com', isLoggedIn: true };
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: user, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    
    wrapper.find('#logoutSection').props().onClick();
    expect(logOutSpy).toHaveBeenCalledTimes(1);
  });
});
