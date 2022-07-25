import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function QuickInfo({ title, value }) {
  return (
    <div className='quickInfoCard'>
      <div className='quickInfoCard__title'>{title}</div>
      <div className='quickInfoCard__value'>{value}</div>
    </div>
  );
}

QuickInfo.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
