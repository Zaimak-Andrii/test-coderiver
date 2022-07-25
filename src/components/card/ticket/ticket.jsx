import React from 'react';
import TicketItem from './item/ticketItem';
import './style.scss';

const TicketsList = [
  { text: 'Waiting on Feature Request', value: 4238 },
  { text: 'Awaiting Customer Response', value: 1005 },
  { text: 'Awaiting Developer Fix', value: 914 },
  { text: 'Pending', value: 281 },
];

export default function Ticket() {
  return (
    <div className='ticket'>
      {TicketsList.map((item) => (
        <TicketItem key={item.text} {...item} />
      ))}
    </div>
  );
}
