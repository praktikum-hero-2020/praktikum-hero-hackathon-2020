import React from 'react';
import Title from '../../Title/Title';
import Table from '../../Diagrams/Table/Table';
import Description from '../Description/Description';

export default () => {
  const tableHeading = [
    'Сегодня',
    'В билжайшие 7 дней',
  ];
  const tableData = [
    ['21312312', '5672673'],
    ['325345', '345324534'],
    ['9005', '6456'],
    ['123123', '4365']
  ];
  return (
    <div className="popular">
      <Title className="popular__title" text='День рождение 🐶 и 🐈' />
      <div className="popular__content">
        <Table heading={tableHeading} data={tableData} />
      </div>
      <Description text="Лишний повод напомнить посетителю сайта о том, что праздники могут быть не только у людей. Ищете, кого сделать пёсиком или котиком дня? Сделайте им именинника!" />
    </div>
  );
}