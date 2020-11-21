import React, { useState } from 'react';
import './Description.scss';

export default ({ text }) => {
  const [state, setState] = useState(false);
  const onCLick = () => {
    setState(!state);
  };
  return (
    <div className="description">
      <button onClick={onCLick} className="description__button">
        Опсиание
      </button>
      <p className={`description__item ${state && 'description__item_open'}`}> {text} </p>
    </div>
  );
};
