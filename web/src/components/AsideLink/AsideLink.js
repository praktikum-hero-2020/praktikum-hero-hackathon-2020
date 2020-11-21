import React from 'react';
import { NavLink } from 'react-router-dom';

const AsideLink = ({ title, path, clickHandler }) => {
  return (
    <NavLink to={path} onClick={clickHandler} className="aside__link">
      {title}
    </NavLink>
  );
};

export default AsideLink;
