import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders correct html with type and value props', () => {
    const type = 'default';
    const value = 'test';
    const wrapper = shallow(<NotificationItem type={type} value={value} />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual(type);
    expect(wrapper.text()).toContain(value);
  });

  it('renders correct HTML with dummy html prop', () => {
    const type = 'default';
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type={type} html={html} />);
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(html);
  });

  it('calls markAsRead with the correct ID when clicked', () => {
    const id = 1;
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem id={id} type="default" value="test" markAsRead={markAsReadSpy} />);

    wrapper.find('li').simulate('click');

    expect(markAsReadSpy).toHaveBeenCalledWith(id);
  });
});
