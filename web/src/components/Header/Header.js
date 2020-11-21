import React from 'react';
import './Header.scss';
import { ReactComponent as YaIcon } from 'icons/ya-light.svg';
import { ReactComponent as PrIcon } from 'icons/pr-dark.svg';
import { ReactComponent as EllipseIcon } from 'icons/ellipse.svg';
import { ReactComponent as TFIcon } from 'icons/tf-logo.svg';
import MenuItem from '../MenuItem/MenuItem';
import links from '../../constants/links';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="https://yandex.ru/">
          <YaIcon className="logo-icon header__logo-ya" />
        </a>
        <a href="https://praktikum.yandex.ru/">
          <PrIcon className="logo-icon" />
        </a>
        <EllipseIcon className="header__logo-ellipse" />
        <a href="https://teddyfood.com/ru/">
          <TFIcon className="logo-icon" />
        </a>
      </div>
      <nav>
        <ul className="header__menu">
          {links.map(({ value, path }) => (
            <MenuItem key={value} text={value} path={path} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
