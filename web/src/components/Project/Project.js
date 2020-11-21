import React from 'react';
import Title from '../Title/Title';
import './Project.scss';

export default () => {
  return (
    <div className="project">
      <Title className="project__title" text="Какие проблемы поможет решить наш прототип" />
      <ul className="project__list">
        <li className="project__item">
          Понять шансы каждого питомца на свой дом. Почему одних домой забирают быстро, а другие задерживаются
          в приюте.
        </li>
        <li className="project__item">Выявить питомцев, которых нужно продвинуть.</li>
        <li className="project__item">Собирает статистику по проданным рекламным пакетам.</li>
      </ul>
      <Title className="project__title" text="В перспективе:" />
      <ul className="project__list">
        <li className="project__item">Оптимизация рекламы. Возможности для ее расширения</li>
        <li className="project__item">Добавление рекомендательной системы пожертвований</li>
      </ul>
    </div>
  );
};
