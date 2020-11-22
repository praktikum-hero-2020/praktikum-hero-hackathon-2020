import React, { useState } from 'react';
import classNames from 'classnames';
import './Aside.scss';
import { ReactComponent as ToggleIcon } from 'icons/arrow-right.svg';
import AsideLink from '../AsideLink/AsideLink';

const titleLinks = [
  { title: 'Заполнение главной популярности', path: '/main/popular' },
  { title: 'Дни рождения 🐶 и 🐈', path: '/main/birthday' },
  { title: 'Мониторинг возраста особей', path: '/main/years' },
];

const Aside = () => {
  const [isShow, setIsShow] = useState(false);
  const asideClassName = classNames('aside', { 'aside_is-active': isShow });
  const toggleClassName = classNames('aside__toggle-button', { 'aside__toggle-button_is-active': isShow });
  const toggleAside = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <aside className={asideClassName}>
        <div className="aside__links">
          <h2 className="aside__links-title">Данные для анализа</h2>
          {titleLinks.map(({ title, path }) => (
            <AsideLink key={title} path={path} title={title} clickHandler={toggleAside} />
          ))}
        </div>
        <div className="aside__toggle-wrapper">
          <button type="button" className={toggleClassName} onClick={toggleAside}>
            <ToggleIcon />
          </button>
        </div>
      </aside>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      {isShow && <div className="overlay" onClick={toggleAside} />}
    </>
  );
};

export default Aside;
