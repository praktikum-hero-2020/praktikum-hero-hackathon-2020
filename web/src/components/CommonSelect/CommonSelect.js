/* Libs */
import React from 'react';
import Select, { components } from 'react-select';
/* Styles */
import './CommonSelect.scss';
/* Components */
import SelectIcon from '../SelectIcon/SelectIcon';

const CommonSelect = ({ className, options, value, icons, changeHandler }) => {
  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <SelectIcon icon={value} icons={icons} />
      {children}
    </components.SingleValue>
  );

  const Option = ({ children, ...props }) => {
    return (
      <components.Option {...props}>
        <SelectIcon icon={props.value} icons={icons} />
        {children}
      </components.Option>
    );
  };

  return (
    <Select
      className={`select ${className}`}
      classNamePrefix="select"
      options={options}
      value={options.find(item => item.value === value)}
      onChange={changeHandler}
      components={{ SingleValue, Option }}
    />
  );
};

export default CommonSelect;
