import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  // Mock console.log before tests
  const originalConsoleLog = console.log;
  beforeEach(() => {
    console.log = jest.fn();
  });

  // Restore console.log after tests
  afterEach(() => {
    console.log = originalConsoleLog;
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem elements instead of li', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toContain('Here is the list of notifications');
  });

  it('renders the correct HTML for the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).at(0);
    expect(firstNotificationItem.prop('type')).toBe('default');
    expect(firstNotificationItem.prop('value')).toBe('New course available');
  });

  it('calls markAsRead with the correct ID when passed to NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const notificationItems = wrapper.find(NotificationItem);

    notificationItems.forEach((item, index) => {
      item.prop('markAsRead')(index + 1);
      expect(console.log).toHaveBeenCalledWith(`Notification ${index + 1} has been marked as read`);
    });
  });
});
