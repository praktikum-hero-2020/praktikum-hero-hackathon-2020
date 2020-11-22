import React, { useEffect, useState } from 'react';
import Title from '../../Title/Title';
import Pie from '../../Diagrams/Pie/Pie';
import './Years.scss';
import Description from '../Description/Description';
import Loader from '../../Loader/Loader';
import baseClient from '../../../services/baseClient';

export default () => {
  const [load, setLoad] = useState(true);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  const parseData = ({ cats, dogs }) => {
    const catsArr = [];
    const dogsArr = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const cat in cats) {
      if (cats[cat] !== 0) {
        let parse = '';

        switch (cat) {
          case 'kitten': {
            parse = 'котята';
            break;
          }
          case 'young': {
            parse = 'молодые';
            break;
          }
          case 'adult': {
            parse = 'взрослые';
            break;
          }
          case 'elderly': {
            parse = 'пожилые';
            break;
          }
          case 'old': {
            parse = 'старые';
            break;
          }
          default: {
            break;
          }
        }

        catsArr.push({
          id: parse,
          label: parse,
          value: cats[cat],
        });
      }
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const dog in dogs) {
      if (dogs[dog] !== 0) {
        let parse = '';
        switch (dog) {
          case 'puppy': {
            parse = 'щинки';
            break;
          }
          case 'young': {
            parse = 'молодые';
            break;
          }
          case 'adult': {
            parse = 'взрослые';
            break;
          }
          default: {
            break;
          }
        }

        dogsArr.push({
          id: parse,
          label: parse,
          value: dogs[dog],
        });
      }
    }

    setCats([...catsArr]);
    setDogs([...dogsArr]);
  };

  useEffect(() => {
    baseClient
      .getCategories()
      .then(data => {
        parseData(data);
      })
      .catch(console.log)
      .finally(() => {
        setTimeout(() => {
          setLoad(false);
        }, 2000);
      });
  }, []);

  return (
    <div className="years">
      <Title className="years__title" text="Мониторинг возраста особей" />
      {load ? (
        <Loader />
      ) : (
        <div className="years__animals">
          <div className="years__animal">
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <div className="years__animal-title">Котики🐈</div>
            <div className="years__pie-container">
              <Pie data={cats} />
            </div>
          </div>
          <div className="years__animal">
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <div className="years__animal-title">Собачки🐕</div>
            <div className="years__pie-container">
              <Pie data={dogs} />
            </div>
          </div>
        </div>
      )}

      <Description text="Показывает возрастной состав обитателей приютов. Помогает равномерно заполнять главную страницу представителями всех категорий." />
    </div>
  );
};
