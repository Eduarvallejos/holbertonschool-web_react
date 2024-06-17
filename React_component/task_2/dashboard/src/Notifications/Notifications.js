import React, {Component}from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css'
import NotificationItem from './NotificationItem';


const handleClick = () => {
  console.log('Close button has been clicked');
};

class Notifications extends Component{
  constructor(props) {
    super(props);
    // Bind the method in the constructor
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead = (id ) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
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
          <NotificationItem type="default" value="New course available" markAsRead={this.markAsRead}/>
          <NotificationItem type="urgent" value="New resume available" markAsRead={this.markAsRead}/>
          <NotificationItem type="urgent" html={{ __html: '<strong>Urgent requirement</strong> - complete by  EOD' }} markAsRead={this.markAsRead}/>
        </ul>
      </div>
    );
  }
};

export default Notifications;
