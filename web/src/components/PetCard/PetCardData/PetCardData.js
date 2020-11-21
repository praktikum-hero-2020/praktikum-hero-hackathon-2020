import React from 'react';

export default ({ heading, value }) => {
  return (
    <p className="pet-card__data">
      <span className="pet-card__heading">{heading}: </span>
      <span className="pet-card__value">{value}</span>
    </p>
  );
};
