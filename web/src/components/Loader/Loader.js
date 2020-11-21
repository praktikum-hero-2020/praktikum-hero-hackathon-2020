import React from 'react';
import './Loader.scss';

export default () => {
  return (
    <div className="loader">
      <div className="loader__content">
        <p className="loader__icon">🐕</p>
        <div className="loader__item">
          <div className="loader__ball" />
        </div>
      </div>
    </div>
  );
};
