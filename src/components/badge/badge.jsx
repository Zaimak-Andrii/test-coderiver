import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const BadgeColor = {
  green: 'green',
  yellow: 'yellow',
  red: 'red',
  grey: 'grey',
};

export default function Badge({ color, children, ...props }) {
  const getTypeClass = (color) => {
    switch (color) {
      case BadgeColor.yellow:
        return 'badge--yellow';
      case BadgeColor.red:
        return 'badge--red';
      case BadgeColor.green:
        return 'badge--green';

      default:
        return 'badge--grey';
    }
  };

  return (
    <div className={`badge ${getTypeClass(color)}`} {...props}>
      {children}
    </div>
  );
}

Badge.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};
