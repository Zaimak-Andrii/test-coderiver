import React, { useState } from 'react';
import './style.scss';

export default function Checkbox({ text, checked }) {
  const [value, setValue] = useState(checked);

  return (
    <div>
      <input
        className='checkbox'
        id={text}
        type='checkbox'
        checked={value}
        onChange={() => setValue((prev) => !prev)}
      />
      <label htmlFor={text}>{text}</label>
    </div>
  );
}
