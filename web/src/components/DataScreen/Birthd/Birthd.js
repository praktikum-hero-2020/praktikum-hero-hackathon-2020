import React, { useEffect, useState } from 'react';
import Title from '../../Title/Title';
import Table from '../../Diagrams/Table/Table';
import Description from '../Description/Description';
import baseClient from '../../../services/baseClient';
import Loader from '../../Loader/Loader';

export default () => {
  const tableHeading = ['Сегодня', 'В ближайшие 7 дней'];
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPetBD = async () => {
      setLoading(true);
      const result = await baseClient.getPetBirthdays();
      setData(result);
      setLoading(false);
    };
    fetchPetBD();
  }, []);

  return (
    <div className="popular">
      <Title className="popular__title" text="День рождения 🐕 и 🐈" />
      <div className="popular__content">
        {loading ? <Loader /> : data && <Table heading={tableHeading} data={data} />}
      </div>
      <Description text="Лишний повод напомнить посетителю сайта о том, что праздники могут быть не только у людей. Ищете, кого сделать пёсиком или котиком дня? Сделайте им именинника!" />
    </div>
  );
};
