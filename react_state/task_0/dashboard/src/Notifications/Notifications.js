import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const fadeIn = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounce = {
  '45%, 50%': { transform: 'translateY(5px)' },
  '50%': { transform: 'translateY(-5px)' },
};

const styles = StyleSheet.create({
  MenuItem: {
    textAlign: 'right',
    position: 'fixed',
    float: 'right',
    top: '0',
    right: '0',
    marginRight: '20px',
    marginTop: '20px',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    zIndex: '1001',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },

  Notifications: {
    position: 'fixed',
    float: 'right',
    top: '10px',
    right: '10px',
    border: '2px dotted red',
    padding: '10px',
    paddingLeft: '2px',
    margin: '5px',
    backgroundColor: '#f9f9f9',
    zIndex: '1000',
    '@media (max-width: 900px)': {
      top: '0',
      right: '0',
      left: '0',
      border: '0',
      bottom: '0',
      margin: '0',
      padding: '0',
    }
  },
  text: {
    margin: '0px',
    fontSize: '1.02rem',
    paddingTop: '5px',
    paddingLeft: '5px',
    '@media (max-width: 900px)': {
      fontSize: '20px',
    },
  },
  ul: {
    '@media (max-width: 900px)': {
      padding: '0',
      listStyleType: 'none',
    },
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
    this.props.handleHideDrawer();
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.listNotifications.length <
      nextProps.listNotifications.length
      ? true
      : false || this.props.displayDrawer !== nextProps.displayDrawer;
  }

  render() {
    const { displayDrawer, listNotifications = [], handleDisplayDrawer } = this.props;
    return (
      <React.Fragment>
        {!displayDrawer && (
          <div className={css(styles.MenuItem)} id='menuItem' onClick={handleDisplayDrawer}>
            Your notifications
          </div>
        )}
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default Notifications;
