import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css'

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notifications;
