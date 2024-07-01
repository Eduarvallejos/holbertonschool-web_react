import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem elements instead of li', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find(NotificationItem).length).toBe(1);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('p').text()).toContain('Here is the list of notifications');
  });

  it('renders the correct HTML for the first NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const firstNotificationItem = wrapper.find(NotificationItem).at(0);
    expect(firstNotificationItem.prop('type')).toBe('default');
    expect(firstNotificationItem.prop('value')).toBe('No new notification for now');
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('#menuItem').length).toBe(1);
  });

  it('does not display the div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('#Notifications').length).toBe(0);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('#menuItem').length).toBe(1);
  });

  it('displays the div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('#Notifications').length).toBe(1);
  });

  it('renders correctly with an empty array', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correctly without the listNotifications prop', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct number of NotificationItem when listNotifications is passed', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(listNotifications.length);
  });

  it('does not display the message "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.exists('p')).not.toContain('Here is the list of notifications');
  });

  it('calls console.log with the correct message when markAsRead is called', () => {
    const mockNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={mockNotifications} />);
    const instance = wrapper.instance();

    // We spy console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // We directly call markAsRead with the id of the first item in the mock notification list
    instance.markAsRead(mockNotifications[0].id);

    // We verify that console.log has been called with the expected message
    expect(consoleSpy).toHaveBeenCalledWith(`Notification ${mockNotifications[0].id} has been marked as read`);

    // We restore console.log to avoid side effects on other tests
    consoleSpy.mockRestore();
  });

  it('does not rerender when updating the props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
    const shouldComponentUpdateSpy = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications });

    expect(shouldComponentUpdateSpy).toHaveReturnedWith(false);
  });

  it('rerenders when updating the props with a longer list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    const newListNotifications = [
      ...listNotifications,
      { id: 3, type: 'urgent', value: 'New requirement available' },
    ];

    const shouldComponentUpdateSpy = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: newListNotifications });

    expect(shouldComponentUpdateSpy).toHaveReturnedWith(true);
  });

});
