import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoNotifications } from 'react-icons/io5';
import Avatar, { AvatarType } from '../avatar/avatar';
import userAvatar from '../../assets/avatar.jpg';
import './style.scss';

export default function Header() {
  return (
    <header>
      <div className='title'>Users</div>
      <div className='search'>
        <FiSearch />
      </div>
      <div className='notifications'>
        <IoNotifications />
      </div>
      <div className='separator-vertivcal'></div>
      <div className='user-name'>Jones Ferdinand</div>
      <Avatar link={userAvatar} type={AvatarType.border} />
    </header>
  );
}
