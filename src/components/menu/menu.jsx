import React from 'react';
import MenuItem from './item/menuItem';
import { FaChartPie, FaLightbulb, FaBook, FaTicketAlt } from 'react-icons/fa';
import { IoIosPeople, IoIosRibbon } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { ImUserTie } from 'react-icons/im';
import './style.scss';

const MenuList = [
  { title: 'Overview', to: '', icon: FaChartPie },
  { title: 'Users', to: '', icon: FaTicketAlt },
  { title: 'Ideas', to: '', icon: FaLightbulb },
  { title: 'Contacts', to: '', icon: IoIosPeople },
  { title: 'Agents', to: '', icon: ImUserTie },
  { title: 'Articles', to: '', icon: FaBook },
  { title: 'Settings', to: '', icon: IoSettingsSharp },
  { title: 'Subscription', to: '', icon: IoIosRibbon },
];

export default function Menu() {
  return (
    <nav className='menu'>
      <ul>
        {MenuList.map((item) => (
          <MenuItem key={item.title} icon={item.icon}>
            {item.title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
}
