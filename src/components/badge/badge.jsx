import React from 'react';
import { DISTANCE_TYPE } from '../users-list/table/usersTable';
import PropTypes from 'prop-types';
import './style.scss';

export default function Badge({ type, children }) {
  const getTypeClass = (type) => {
    switch (type) {
      case DISTANCE_TYPE.LOW:
        return 'badge--low';
      case DISTANCE_TYPE.HIGH:
        return 'badge--high';

      default:
        return 'badge--normal';
    }
  };

  return <div className={`badge ${getTypeClass(type)}`}>{children}</div>;
}

Badge.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};
