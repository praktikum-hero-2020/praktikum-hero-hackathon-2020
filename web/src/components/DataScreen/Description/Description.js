import React, { useState } from 'react';
import './Description.scss';

export default ({ text }) => {
  return (
    <div className="description">
      <div className="description__button">Описание:</div>
      <p className="description__item"> {text} </p>
    </div>
  );
};
