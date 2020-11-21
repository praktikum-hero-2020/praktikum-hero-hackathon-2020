import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const MenuItem = ({ text, path, isActive, clickHandler }) => {
  const menuItemClassName = classNames('header__menu-item', { 'header__menu-item_is-active': isActive });
  const handleClick = () => {
    if (clickHandler) {
      clickHandler(text);
    }
  };

  return (
    <Link to={path} onClick={handleClick} className={menuItemClassName}>
      <li>{text}</li>
    </Link>
  );
};

export default MenuItem;
