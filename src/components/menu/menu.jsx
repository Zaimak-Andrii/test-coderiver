import React from 'react';
import MenuItem from './item/menuItem';
import { FaChartPie, FaLightbulb, FaBook, FaTicketAlt } from 'react-icons/fa';
import { IoIosPeople, IoIosRibbon } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { ImUserTie } from 'react-icons/im';
import './style.scss';

const MenuList = [
  { title: 'Overview', to: 'overview', icon: FaChartPie },
  { title: 'Users', to: 'users', icon: FaTicketAlt },
  { title: 'Ideas', to: 'ideas', icon: FaLightbulb },
  { title: 'Contacts', to: 'contacts', icon: IoIosPeople },
  { title: 'Agents', to: 'agents', icon: ImUserTie },
  { title: 'Articles', to: 'articles', icon: FaBook },
  { title: 'Settings', to: 'settings', icon: IoSettingsSharp },
  { title: 'Subscription', to: 'subsctiption', icon: IoIosRibbon },
];

export default function Menu() {
  return (
    <nav className='menu'>
      <ul>
        {MenuList.map((item) => (
          <MenuItem key={item.title} icon={item.icon} to={item.to}>
            {item.title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
}
