import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleClick() {
    console.log('Close button has been clicked');
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <React.Fragment>
        <div className="menuItem">
          Your notifications
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              aria-label="Close"
              onClick={this.handleClick}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                float: 'right',
              }}
            >
              x
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : (
                listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
