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
    top: '0',
    right: '0',
    marginRight: '20px',
    padding: '10px',
    position: 'fixed',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    zIndex: '1001',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
    ':hover + div': {
      display: 'block',
    },

  },
  Notifications: {
    position: 'fixed',
    top: '0',
    right: '0',
    marginRight: '20px',
    border: '2px dotted red',
    backgroundColor: '#f9f9f9',
    zIndex: '1000',
    display: 'none',
  },
  text: {
    margin: '0px',
    fontSize: '20px',
    paddingTop: '5px',
    paddingLeft: '5px',
  },
  ul: {
    padding: '0',
    listStyleType: 'none',
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
    const { displayDrawer = true, listNotifications = [] } = this.props;
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


export default Notifications;
