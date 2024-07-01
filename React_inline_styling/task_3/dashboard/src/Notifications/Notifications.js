import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  MenuItem: {
    textAlign: 'right',
    padding: '10px',
  },
  Notifications: {
    border: '2px dotted red',
    padding: '10px',
    paddingLeft: '2px',
    margin: '5px',
    backgroundColor: '#f9f9f9',
    float: 'right',
    '@media (max-width: 900px)': {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    border: '2px dotted red',
    backgroundColor: '#f9f9f9',
    zIndex: '1000',
    }
  },
  text: {
    margin: '0px',
    fontSize: '1.02rem',
    paddingTop: '5px',
    paddingLeft: '5px',
    '@media (max-width: 900px)': {
    margin: '0px',
    fontSize: '20px',
    paddingTop: '5px',
    paddingLeft: '5px',
    }
  },
  ul: {
    '@media (max-width: 900px)': {
    padding: '0',
    listStyleType: 'none',
    }
  },
});

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
        <div className={css(styles.MenuItem)} id='menuItem'>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)} id='Notifications'>
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
            <p className={css(styles.text)}>Here is the list of notifications</p>
            <ul className={css(styles.ul)}> 
              {listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notifications for now" />
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
