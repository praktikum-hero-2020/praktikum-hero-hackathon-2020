import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ text, path }) => {
  return (
    <NavLink to={path} className="header__menu-item" activeClassName="header__menu-item_is-active">
      <li>{text}</li>
    </NavLink>
  );
};

export default MenuItem;
