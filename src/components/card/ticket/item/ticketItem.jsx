import React from 'react';
import './style.scss';

export default function TicketItem({ text, value }) {
  return (
    <div className='ticket-item'>
      <div className='ticket-item__text'>{text}</div>
      <div className='ticket-item__value'>{value}</div>
    </div>
  );
}
