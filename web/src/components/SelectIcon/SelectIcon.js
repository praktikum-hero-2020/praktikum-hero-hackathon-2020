import React from 'react';

const SelectIcon = ({ icon, icons }) => {
  const Icon = icons[icon];
  return <Icon className="select__icon" />;
};

export default SelectIcon;
