import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function MenuItem({ icon: IconComponent, children }) {
  return (
    <li className='menu-item'>
      <IconComponent className='menu-item__icon' /> {children}
    </li>
  );
}

MenuItem.protoTypes = {
  icon: PropTypes.element,
  children: PropTypes.node,
};
