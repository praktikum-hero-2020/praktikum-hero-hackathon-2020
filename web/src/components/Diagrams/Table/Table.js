import React from 'react';
import './Table.scss';

export default ({ heading, data }) => {
  // eslint-disable-next-line no-unused-vars
  const onClick = event => {
    console.log(event.target.dataset.id);
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
        {data.map((item, i) => {
          return (
            <tr className="table__tr" key={i}>
              {item.map(text => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                <td onClick={onClick} data-id={text} className="table__body-item" key={text}>
                  id: {text}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
