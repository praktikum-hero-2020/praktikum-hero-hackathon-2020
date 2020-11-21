import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import PetCardData from './PetCardData/PetCardData';
import './PetCard.scss';
import Description from '../DataScreen/Description/Description';
import baseClient from '../../services/baseClient';
import Loader from '../Loader/Loader';

export default ({
  match: {
    params: { id },
  },
}) => {
  const [cardData, setCardData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCardData = async () => {
      setLoading(true);
      const result = await baseClient.getPetCard(id);
      setCardData(result);
      setLoading(false);
    };
    fetchCardData();
  }, []);

  const { donats, gender, name, percentage, profile_link: profileLink, type_of_pet: type } = cardData;
  return (
    <div className="pet-card">
      {loading ? (
        <Loader />
      ) : (
        <div className="pet-card__container">
          <Title className="pet-card__title" text={name} />
          <p className="pet-card__id">{`id: ${id}`}</p>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji,jsx-a11y/anchor-is-valid */}
          <a href={profileLink} className="pet-card__link">
            {type === 'Кошки' ? '🐈' : '🐕'}
          </a>
          <PetCardData heading="Пол" value={gender} />
          <PetCardData heading="Пожертвовано" value={donats} />
          <PetCardData heading="Вероятность найти хозяина" value={percentage} />
          <PetCardData heading="Дней в приюту" value="В разработке" />
          <PetCardData heading="Потрачено на рекламу" value="В разработке" />
        </div>
      )}
      <Description text="Сводная информация обо всех питомцах из базы сайта." />.
    </div>
  );
};
