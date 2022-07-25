import React from 'react';
import './style.scss';

export const AvatarType = {
  normal: 'normal',
  border: 'border',
};

export default function Avatar({ link, type = AvatarType.normal }) {
  return <img src={link} className='avatar' alt='avatar' data-type={type} />;
}
