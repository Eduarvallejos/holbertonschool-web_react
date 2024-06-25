import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />).dive();
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />).dive();
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />).dive();
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />).dive();
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('does not display the CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  describe('when isLoggedIn is true', () => {
    it('does not include the login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login).length).toBe(0);
    });

    it('includes the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />).dive();
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });

  describe('logOut functionality', () => {
    it('calls logOut and alerts when control+h is pressed', () => {
      const logOutMock = jest.fn();
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      const wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />).dive();

      const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
      document.dispatchEvent(event);

      expect(logOutMock).toHaveBeenCalled();
      expect(alertMock).toHaveBeenCalledWith('Logging you out');

      alertMock.mockRestore();
    });
  });
});
