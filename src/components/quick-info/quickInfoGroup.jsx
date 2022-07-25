import React from 'react';
import QuickInfo from './card/quickInfo';
import './style.scss';

export default function QuickInfoGroup() {
  return (
    <div className='quickInfoGroup'>
      <QuickInfo title='Active' value={60} />
      <QuickInfo title='Online' value={16} />
      <QuickInfo title='Filtered' value={43} />
      <QuickInfo title='Banned' value={64} />
    </div>
  );
}
