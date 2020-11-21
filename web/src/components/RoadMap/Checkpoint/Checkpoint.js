import React from 'react';
import './Checkpoint.scss';

export default ({ title, text }) => {
  return (
    <div className="check">
      <div className="check__container">
        <h3 className="check__title">
          {title}
        </h3>
        <p className="check__description">
          {text}
        </p>
      </div>
      <div className="check__circle" />
    </div>
  );
};
