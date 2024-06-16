// test 

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

// Mock the alert function
global.alert = jest.fn();

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });
});

describe('App Class', () => {
  it('calls logOut function and shows alert when Ctrl+h is pressed', () => {
    const logOutMock = jest.fn();

    // Mount the App component with the logOut prop
    const wrapper = mount(<App logOut={logOutMock} />);

    // Simulate Ctrl+h keydown event
    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true
    });
    document.dispatchEvent(event);

    // Verificar si el ciclo de vida de mounting se ha completado
    setTimeout(() => {
      // Check if alert was called with the correct message
      expect(global.alert).toHaveBeenCalledWith('Logging you out');

      // Check if logOut function was called
      expect(logOutMock).toHaveBeenCalled();

      // Clean up
      wrapper.unmount();
    }, 0);
  });
});
