import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', html = null, value = '' }) => {
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }
  return (
    <li data-notification-type={type}>{value}</li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};



export default NotificationItem;
