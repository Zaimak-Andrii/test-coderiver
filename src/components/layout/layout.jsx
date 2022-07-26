import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Header from '../header/Header';
import './style.scss';

const Layout = () => {
  return (
    <div className='app'>
      <Dashboard />
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
