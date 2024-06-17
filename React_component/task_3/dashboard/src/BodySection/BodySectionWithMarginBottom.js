import React from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';
import BodySection from './BodySection';

const BodySectionWithMarginBottom = (props) => {
  const { children, ...rest } = props;

  return (
    <div className="bodySectionWithMargin">
      <BodySection {...rest}>{children}</BodySection>
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  // Define propTypes for props
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;
