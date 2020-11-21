import React, { useEffect, useState } from 'react';
import Title from '../../Title/Title';
import Table from '../../Diagrams/Table/Table';
import Description from '../Description/Description';
import baseClient from '../../../services/baseClient';

export default () => {
  const tableHeading = ['Сегодня', 'В билжайшие 7 дней'];
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPetBD = async () => {
      const result = await baseClient.getPetBirthdays();
      setData(result);
    };
    fetchPetBD();
  }, []);

  return (
    <div className="popular">
      <Title className="popular__title" text="День рождения 🐕 и 🐈" />
      <div className="popular__content">{data && <Table heading={tableHeading} data={data} />}</div>
      <Description text="Лишний повод напомнить посетителю сайта о том, что праздники могут быть не только у людей. Ищете, кого сделать пёсиком или котиком дня? Сделайте им именинника!" />
    </div>
  );
};
