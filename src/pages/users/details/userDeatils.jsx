import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import Avatar, { AvatarType } from '../../../components/avatar/avatar';
import userAvatar from '../../../assets/avatar.jpg';

export default function UserDeatils() {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);

      setUser(response.data);
    };
    getUsers();
  }, [params?.id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className='user-details'>
      <Avatar
        link={userAvatar}
        type={AvatarType.border}
        style={{
          minWidth: '145px',
          minHeight: '145px',
          maxWidth: '145px',
          maxHeight: '145px',
          width: '145px',
          height: '145px',
        }}
      />
      <div className='user-details__name'>{user.name}</div>
      <div className='user-details__company'>{user.company.catchPhrase}</div>
      <div className='user-details__address'>
        Address
        <div>
          {user.address.street}, {user.address.suite}, <br />
          {user.address.city}, {user.address.zipcode}
        </div>
      </div>
      <div className='user-details__phone'>
        Phone <div>{user.phone}</div>
      </div>
      <div className='user-details__website'>
        Website{' '}
        <div>
          <a href='{user.website}'>{user.website}</a>
        </div>
      </div>
    </div>
  );
}
