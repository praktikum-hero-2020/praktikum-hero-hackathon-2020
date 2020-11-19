/* eslint-disable react/button-has-type */
/* Libs */
import React from 'react';
import classNames from 'classnames';
/* Styles */
import './Button.scss';

const Button = ({
  title,
  type = 'button',
  clickHandler,
  value,
  className = '',
  classType,
  classSize,
  disabled,
  children = title,
}) => {
  const CLASS_SIZE = {
    small: 'btn_small',
    medium: 'btn_medium',
    large: 'btn_large',
  };

  const CLASS_TYPE = {
    primary: 'btn_primary',
    transparent: 'btn_transparent',
    icon: 'btn_icon',
  };

  const buttonClassName = classNames('btn', className, CLASS_TYPE[classType], CLASS_SIZE[classSize]);

  const handleClick = () => {
    if (clickHandler) {
      clickHandler(value);
    }
  };
  return (
    <button type={type} title={title} className={buttonClassName} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
