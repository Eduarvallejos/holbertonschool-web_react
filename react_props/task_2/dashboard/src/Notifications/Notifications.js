import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css'
import NotificationItem from './NotificationItem';


const handleClick = () => {
  console.log('Close button has been clicked');
};

const Notifications = () => {

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
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: '<strong>Urgent requirement</strong> - complete by  EOD' }} />
      </ul>
    </div>
  );
};

export default Notifications;
