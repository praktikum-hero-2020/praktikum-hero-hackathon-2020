import React from 'react';
import './TeamInfo.scss';
import teamImg from 'img/team.png';

const TeamInfo = () => {
  return (
    <div className="team-info">
      <img src={teamImg} alt="team" className="team-info__image" />
      <div className="team-info__description">
        <h3 className="team-info__title">Мы - команда выпускников Яндекс Практикума “Пентамино”!</h3>
        <div className="team-info__text">
          <span className="team-info__text team-info__text_accent">Наши участники:</span>
          <ul className="team-info__members-list">
            <li className="team-info__members">Антон Войтенко, Андрей Лапшов - веб-разработка</li>
            <li className="team-info__members">Сергей Коробенков - бэкенд-разработка</li>
            <li className="team-info__members">Алексей Федько, Афросин Евгений - дата-аналитика</li>
            <li className="team-info__members">Анастасия Лапырь - QA-инженер</li>
          </ul>
          <span className="team-info__text team-info__text_accent">И мы круты!</span>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
