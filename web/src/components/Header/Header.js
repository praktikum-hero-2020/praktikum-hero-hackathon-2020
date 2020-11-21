import React, { useState } from 'react';
import './Header.scss';
import { ReactComponent as YaIcon } from 'icons/ya-light.svg';
import { ReactComponent as PrIcon } from 'icons/pr-dark.svg';
import { ReactComponent as EllipseIcon } from 'icons/ellipse.svg';
import { ReactComponent as TFIcon } from 'icons/tf-logo.svg';
import MenuItem from '../MenuItem/MenuItem';

const links = [
  { value: 'О проекте', path: '/project' },
  { value: 'Данные', path: '/main' },
  { value: 'О нас', path: '/about' },
];

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('О проекте');
  const handleActiveMenuItem = id => {
    setActiveMenuItem(id);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a href="https://yandex.ru/">
          <YaIcon className="header__logo-ya" />
        </a>
        <a href="https://praktikum.yandex.ru/">
          <PrIcon />
        </a>
        <EllipseIcon className="header__logo-ellipse" />
        <a href="https://teddyfood.com/ru/">
          <TFIcon />
        </a>
      </div>
      <nav>
        <ul className="header__menu">
          {links.map(({ value, path }) => (
            <MenuItem
              key={value}
              text={value}
              clickHandler={handleActiveMenuItem}
              isActive={value === activeMenuItem}
              path={path}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
