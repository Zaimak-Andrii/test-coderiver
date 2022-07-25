import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Card({ title, buttonTitle, info, component: ComponentItem, ...props }) {
  return (
    <div className='ticket-card' {...props}>
      <div className='ticket-card__header'>
        <div>{title}</div>
        <button type='button' className='ticket-card__header__button'>
          {buttonTitle}
        </button>
      </div>
      <div className='ticket-card__group'>
        {info.text} <span className='ticket-card__group--name'>{info.value}</span>
      </div>
      <ComponentItem />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  info: PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  component: PropTypes.elementType.isRequired,
};
