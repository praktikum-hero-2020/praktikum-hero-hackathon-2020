import React from 'react';
import Title from '../Title/Title';
import PetCardData from './PetCardData/PetCardData';
import './PetCard.scss';
import Description from '../DataScreen/Description/Description';

export default () => {
  return (
    <div className="pet-card">
      <div className="pet-card__container">
        <Title className="pet-card__title" text="Мурмурмяу" />
        <p className="pet-card__id">id: 213123</p>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji,jsx-a11y/anchor-is-valid */}
        <a href="#" target="_blank" className="pet-card__link">
          🐕
        </a>
        <PetCardData heading="Пол" value="Девочка" />
        <PetCardData heading="Дней в приюту" value="3" />
        <PetCardData heading="Пожертвовано" value="300р" />
        <PetCardData heading="Потрачено на рекламу" value="600р" />
        <PetCardData heading="Вероятность найти хозяина" value="100%" />
      </div>
      <Description text="Сводная информация обо всех питомцах из базы сайта." />.
    </div>
  );
};
