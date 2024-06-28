import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
});

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  }

  render() {
    const { type, html, value } = this.props;
    const itemStyle = type === 'urgent' ? styles.urgentItem : styles.defaultItem;

    if (html) {
      return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={this.handleClick} className={css(itemStyle)}></li>
      );
    }

    return (
      <li data-notification-type={type} onClick={this.handleClick} className={css(itemStyle)}>{value}</li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
  markAsRead: () => {},
};

export default NotificationItem;
