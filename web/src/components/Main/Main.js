import React from 'react';
import { Route } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Popular from '../DataScreen/Popular/Popular';
import Years from '../DataScreen/Years/Years';
import Birthd from '../DataScreen/Birthd/Birthd';
import Title from '../Title/Title';

const Main = () => {
  return (
    <>
      <Aside />
      <Route path="/main" exact>
        <Title text="Выберите данные для анализа в меню слева" />
      </Route>
      <Route path="/main/popular" component={Popular} />
      <Route path="/main/years" component={Years} />
      <Route path="/main/birthday" component={Birthd} />
    </>
  );
};

export default Main;
