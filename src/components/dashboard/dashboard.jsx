import React from 'react';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import './style.scss';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Logo />
      <Menu />
    </div>
  );
}
