import React from 'react';
import QuickInfoGroup from '../../components/quick-info/quickInfoGroup';
import Card from '../../components/card/card';
import UsersList from '../../components/users-list/usersList';
import Ticket from '../../components/card/ticket/ticket';
import './style.scss';

export default function UsersPage() {
  return (
    <div className='users-page'>
      <QuickInfoGroup />
      <UsersList />
      <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'row' }}>
        <Card
          title='Unresolved tickets'
          buttonTitle='View details'
          info={{
            text: 'Group:',
            value: 'Support',
          }}
          component={Ticket}
          style={{ marginRight: '30px' }}
        />
        <Card
          title='Unresolved tickets'
          buttonTitle='View details'
          info={{
            text: 'Group:',
            value: 'Support',
          }}
          component={Ticket}
        />
      </div>
    </div>
  );
}
