import React from 'react';
import Checkpoint from '../Checkpoint/Checkpoint';
import roadmapData from '../data';

export default () => {
  return (
    <div className="road-map__list">
      {roadmapData.map(({ title, text }, i) => (
        <Checkpoint key={i} text={text} title={title} />
      ))}
    </div>
  );
};
