import React from 'react';
import './Table.scss';
import { NavLink } from 'react-router-dom';
import baseClient from '../../../services/baseClient';

export default ({ heading, data }) => {
  // eslint-disable-next-line no-unused-vars
  const onClick = async id => {
    if (id) {
      const result = await baseClient.getPetCard(id);
      console.log(result);
    }
  };

  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          {heading.map((text, i) => (
            <th className="table__head-item" key={i}>
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {data?.['in week'].map(({ id, name }, idx) => {
          const todayData = (data?.today && data?.today[idx]) || {};

          return (
            <tr className="table__tr" key={id}>
              <td className="table__body-item">
                {todayData && (
                  <NavLink className="table__body-item" to={`/pet/${todayData.id}`}>
                    {todayData ? todayData.name : ''}
                  </NavLink>
                )}
              </td>
              <td className="table__body-item">
                {name && (
                  <NavLink className="table__body-item" to={`/pet/${id}`}>
                    {name}
                  </NavLink>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
