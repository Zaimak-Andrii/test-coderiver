import React from 'react';
import Badge, { BadgeColor } from '../../../badge/badge';
import Checkbox from '../../../checkbox/checkbox';
import { TaskStatus } from '../tasks';
import './style.scss';

export default function TaskItem({ text, status, checked }) {
  const getBadgeColor = (status) => {
    switch (status) {
      case TaskStatus.urgent:
        return BadgeColor.yellow;
      case TaskStatus.new:
        return BadgeColor.green;

      default:
        return BadgeColor.grey;
    }
  };
  return (
    <div className='task-item'>
      <Checkbox text={text} checked={checked} />
      <Badge color={getBadgeColor(status)} style={{ borderRadius: '8px' }}>
        {status}
      </Badge>
    </div>
  );
}
