import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Title from '../../Title/Title';
import './Popular.scss';
import Description from '../Description/Description';
import baseClient from '../../../services/baseClient';
import Loader from '../../Loader/Loader';

export default () => {
  const tableHeading = ['В избранном больше 9 раз', 'Не добавлен в избранное', 'В избранном меньше 9 раз'];
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPetBD = async () => {
      setLoading(true);
      const result = await baseClient.getPopularPets();
      setData(result);
      setLoading(false);
    };
    fetchPetBD();
  }, []);

  return (
    <div className="popular">
      <Title className="popular__title" text="Заполнение главной популярности" />
      <div className="popular__content">
        {loading ? (
          <Loader />
        ) : (
          data && (
            <table className="table">
              <thead className="table__head">
                <tr>
                  {tableHeading.map((text, i) => (
                    <th className="table__head-item" key={i}>
                      {text}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="table__body">
                {data.low.map((lowData, idx) => {
                  const averageData = (data?.average && data?.average[idx]) || {};
                  const highData = (data?.high && data?.high[idx]) || {};

                  return (
                    <tr className="table__tr" key={lowData.id}>
                      <td className="table__body-item">
                        {highData && (
                          <NavLink className="table__body-item" to={`/pet/${highData.id}`}>
                            {highData ? highData.name : ''}
                          </NavLink>
                        )}
                      </td>
                      <td className="table__body-item">
                        {lowData && (
                          <NavLink className="table__body-item" to={`/pet/${lowData.id}`}>
                            {lowData ? lowData.name : ''}
                          </NavLink>
                        )}
                      </td>
                      <td className="table__body-item">
                        {averageData && (
                          <NavLink className="table__body-item" to={`/pet/${averageData.id}`}>
                            {averageData ? averageData.name : ''}
                          </NavLink>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )
        )}
        {/* <Table heading={tableHeading} data={tableData} /> */}
      </div>
      <Description text="Обратите внимание на представителей этих групп. Все они нуждаются в дополнительном продвижении. Получение отметки «В избранное» значительно повышает шансы питомца обрести нового хозяина. Обычно, хватает 9 таких отметок, поэтому если у животного их больше, а дома по-прежнему нет - это тревожный знак и нужно рассказать о нём больше." />
    </div>
  );
};
