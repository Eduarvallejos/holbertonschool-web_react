import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  it('should log to the console when mounting and unmounting with "Component" when the wrapped element is pure HTML', () => {
    console.log = jest.fn();

    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = shallow(<WrappedComponent />);

    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');

    console.log.mockRestore();
  });

  it('should log to the console on mount and unmount with the component name when the wrapped element is the Login component', () => {
    console.log = jest.fn();

    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);

    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');

    console.log.mockRestore();
  });
});
