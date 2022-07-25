import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './style.scss';
import UsersTable from './table/usersTable';

export default function UsersList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      setUsersList(response.data);
    };
    getUsers();
  }, []);
  return (
    <div className='users-list'>
      <div className='users-list__title'>All users</div>
      <UsersTable usersList={usersList} />
    </div>
  );
}
