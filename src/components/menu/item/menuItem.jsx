import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

export default function MenuItem({ icon: IconComponent, to, children }) {
  const navigate = useNavigate();
  return (
    <li className='menu-item' onClick={() => navigate(to)}>
      <IconComponent className='menu-item__icon' /> {children}
    </li>
  );
}

MenuItem.protoTypes = {
  icon: PropTypes.element,
  to: PropTypes.string,
  children: PropTypes.node,
};
