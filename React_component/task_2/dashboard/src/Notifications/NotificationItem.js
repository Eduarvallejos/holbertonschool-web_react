import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, type = 'default', html = null, value = '', markAsRead}) => {
  const handleClick = () => {
    markAsRead(id);
  };

  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleClick}></li>
    );
  }
  return (
    <li data-notification-type={type} onClick={handleClick}>{value}</li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};



export default NotificationItem;
