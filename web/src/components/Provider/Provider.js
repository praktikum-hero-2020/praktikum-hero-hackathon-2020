import React, { createContext } from 'react';

const AppContext = createContext();

const Provider = ({ children }) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, Provider };
