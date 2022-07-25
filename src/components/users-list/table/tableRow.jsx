import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Avatar from '../../avatar/avatar';
import Badge from '../../badge/badge';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function TableRow({ user }) {
  return (
    <div className='users-table__row'>
      <div className='users-table__row__user'>
        <Avatar link={user.avatar} />
        <div className='users-table__row__user__container'>
          <div className='users-table__row__user__container__name'>{user.name}</div>
          <div className='users-table__row__user__container__city'>{user.address.city}</div>
        </div>
      </div>
      <div className='users-table__row__company'>
        <div className='users-table__row__company__container'>
          <div className='users-table__row__company__container__name'>{user.company.name}</div>
          <div className='users-table__row__company__container__city'>{user.company.bs}</div>
        </div>
      </div>
      <div className='users-table__row__email'>
        <div className='users-table__row__email__container'>
          <div className='users-table__row__email__container__name'>{user.email}</div>
          <div className='users-table__row__email__container__city'>{user.website}</div>
        </div>
      </div>
      <div className='users-table__row__distance'>
        <Badge type={user.distance}>{user.distance}</Badge>
        <BsThreeDotsVertical className='users-table__row__distance__three-dots' />
      </div>
    </div>
  );
}

TableRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    distance: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
    }),
    company: PropTypes.shape({
      name: PropTypes.string,
      bs: PropTypes.string,
    }),
  }),
};
