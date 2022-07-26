import React from 'react';
import './style.scss';

export default function TicketItem({ text, value = '' }) {
  return (
    <div className='ticket-item'>
      <p className='ticket-item__text'>{text}</p>
      <p className='ticket-item__value'>{value}</p>
    </div>
  );
}
