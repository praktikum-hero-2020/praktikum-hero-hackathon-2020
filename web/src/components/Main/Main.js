import React from 'react';
import { Route } from 'react-router-dom';
import catImg from 'img/cat.jpg';
import Aside from '../Aside/Aside';
import Popular from '../DataScreen/Popular/Popular';
import Years from '../DataScreen/Years/Years';
import Birthd from '../DataScreen/Birthd/Birthd';
import Title from '../Title/Title';
import Loader from '../Loader/Loader';

const Main = () => {
  return (
    <>
      <Aside />
      <Route path="/main" exact>
        <Title
          className="main__title"
          text="Выберите данные для анализа в меню слева. А пока вы выбираете, вот вам котик дня:"
        />
        <img src={catImg} alt="cat of the day" className="main__image" />
      </Route>
      <Route path="/main/popular" component={Popular} />
      <Route path="/main/years" component={Years} />
      <Route path="/main/birthday" component={Birthd} />
    </>
  );
};

export default Main;
