import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const handleClick = () => {
  console.log('Close button has been clicked');
};

const Notifications = ({ displayDrawer = true, listNotifications = []}) => {
  return (
    <React.Fragment>
      <div className="menuItem">
        Your notifications
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            aria-label="Close"
            onClick={handleClick}
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
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};


export default Notifications;
