import React from 'react';

const parseText = (children, className) =>
  children.split(/(\[.+?])/).map(item => {
    if (item.search(/\[.+?]/g) > -1) {
      return (
        <span key={item} className={className}>
          {item.replace(/\[|]/g, '')}
        </span>
      );
    }
    return item;
  });

const TextParser = ({ children, className }) => {
  return <>{parseText(children, className)}</>;
};

export default TextParser;
