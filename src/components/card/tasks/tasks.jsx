import React from 'react';
import TaskItem from './item/taskItem';
import './style.scss';

export const TaskStatus = {
  urgent: 'urgent',
  new: 'new',
  default: 'default',
};

const TasksList = [
  { text: 'Finish ticket update', checked: false, status: TaskStatus.urgent },
  { text: 'Create new ticket example', checked: false, status: TaskStatus.new },
  { text: 'Update ticket report', checked: true, status: TaskStatus.default },
];

export default function Tasks() {
  return (
    <div className='tasks'>
      <div className='task-item task-item--grey'>
        <div>Create new task</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#F0F1F7',
            borderRadius: '8px',
            width: '24px',
            height: '24px',
            fontSize: '20px',
            color: '#9FA2B4',
          }}
        >
          +
        </div>
      </div>
      {TasksList.map((item) => (
        <TaskItem key={item.text} {...item} />
      ))}
    </div>
  );
}
