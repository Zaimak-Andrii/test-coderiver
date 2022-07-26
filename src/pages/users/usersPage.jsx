import React from 'react';
import QuickInfoGroup from '../../components/quick-info/quickInfoGroup';
import Card from '../../components/card/card';
import UsersList from '../../components/users-list/usersList';
import Ticket from '../../components/card/ticket/ticket';
import './style.scss';
import Tasks from '../../components/card/tasks/tasks';
import { useParams } from 'react-router-dom';
import UserDeatils from './details/userDeatils';

export default function UsersPage() {
  const params = useParams();
  return (
    <div className='users-page'>
      <QuickInfoGroup />
      {!params.id && (
        <>
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
              title='Tasks'
              buttonTitle='View all'
              info={{
                text: 'Today',
              }}
              component={Tasks}
            />
          </div>
        </>
      )}
      {params.id && <UserDeatils />}
    </div>
  );
}
