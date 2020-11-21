import React from 'react';
import Table from '../../Diagrams/Table/Table';
import Title from '../../Title/Title';
import './Popular.scss';
import Description from '../Description/Description';

export default () => {
  const tableHeading = ['В избранном больше 9 раз', 'Не добавлен в избранное', 'В избранном меньше 9 раз'];
  const tableData = [
    ['21312312', '5672673', '1346578'],
    ['325345', '345324534', '5345345'],
    ['9005', '6456', '123123'],
    ['123123', '4365', '1341'],
  ];
  return (
    <div className="popular">
      <Title className="popular__title" text="Заполнение главной популярности" />
      <div className="popular__content">
        <Table heading={tableHeading} data={tableData} />
      </div>
      <Description text="Обратите внимание на представителей этих групп. Все они нуждаются в дополнительном продвижении. Получение отметки «В избранное» значительно повышает шансы питомца обрести нового хозяина. Обычно, хватает 9 таких отметок, поэтому если у животного их больше, а дома по-прежнему нет - это тревожный знак и нужно рассказать о нём больше." />
    </div>
  );
};
