import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import TableRow from './tableRow';
import userAvatar from '../../../assets/avatar.jpg';

export const DISTANCE_TYPE = {
  HIGH: 'HIGH',
  LOW: 'LOW',
  NORMAL: 'NORMAL',
};

const usersAdvancedPropsList = [
  { avatar: userAvatar, distance: DISTANCE_TYPE.HIGH },
  { avatar: userAvatar, distance: DISTANCE_TYPE.LOW },
  { avatar: userAvatar, distance: DISTANCE_TYPE.HIGH },
  { avatar: userAvatar, distance: DISTANCE_TYPE.NORMAL },
  { avatar: userAvatar, distance: DISTANCE_TYPE.HIGH },
  { avatar: userAvatar, distance: DISTANCE_TYPE.NORMAL },
  { avatar: userAvatar, distance: DISTANCE_TYPE.LOW },
  { avatar: userAvatar, distance: DISTANCE_TYPE.NORMAL },
  { avatar: userAvatar, distance: DISTANCE_TYPE.HIGH },
  { avatar: userAvatar, distance: DISTANCE_TYPE.LOW },
];

export default function UsersTable({ usersList }) {
  return (
    <div className='users-table'>
      <div className='users-table__headers'>
        <div className='users-table__headers__user'>User details</div>
        <div className='users-table__headers__company'>Company name</div>
        <div className='users-table__headers__email'>Email</div>
        <div className='users-table__headers__distance'>Distance</div>
      </div>
      {usersList.map((user, index) => {
        return <TableRow key={user.id} user={{ ...user, ...usersAdvancedPropsList[index] }} />;
      })}
    </div>
  );
}

UsersTable.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
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
    })
  ),
};
