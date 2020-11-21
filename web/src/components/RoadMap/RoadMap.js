import React from 'react';
import Title from '../Title/Title';
import RoadMapList from './RoadMapList/RoadMapList';
import './RoadMap.scss';

export default () => {
  return (
    <div className="road-map">
      <Title className="road-map__title" text="Карта продукта" />
      <RoadMapList />
    </div>
  );
};
