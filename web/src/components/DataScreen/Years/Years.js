import React from 'react';
import Title from '../../Title/Title';
import Pie from '../../Diagrams/Pie/Pie';
import mock from './test';
import './Years.scss';
import Description from '../Description/Description';

export default () => {
  return (
    <div className="years">
      <Title className='years__title' text='Мониторинг возраста особей' />
      <div className="years__animals">
        <div className="years__animal">
          <div className="years__animal-title">Котики🐈</div>
          <div className="years__pie-container">
            <Pie data={mock} />
          </div>
        </div>
        <div className="years__animal">
          <div className="years__animal-title">
            Собачки🐶
          </div>
          <div className="years__pie-container">
            <Pie data={mock} />
          </div>
        </div>
      </div>
      <Description text="Показывает возрастной состав обитателей приютов. Помогает равномерно заполнять главную страницу представителями всех категорий." />
    </div>
  );
}