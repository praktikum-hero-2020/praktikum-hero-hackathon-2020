import React, { useEffect, useState } from 'react';
import Title from '../../Title/Title';
import Pie from '../../Diagrams/Pie/Pie';
import './Years.scss';
import Description from '../Description/Description';
import Loader from '../../Loader/Loader';

export default () => {
  const [load, setLoad] = useState(true);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  const parseData = ({ cats, dogs }) => {
    const catsArr = [];
    const dogsArr = [];

    for (const cat in cats) {
      if (cats[cat] !== 0) {
        catsArr.push({
          id: cat,
          label: cat,
          value: cats[cat],
        });
      }
    }

    for (const dog in dogs) {
      if (dogs[dog] !== 0) {
        dogsArr.push({
          id: dog,
          label: dog,
          value: dogs[dog],
        });
      }
    }

    setCats([...catsArr]);
    setDogs([...dogsArr]);
  };

  useEffect(() => {
    fetch('http://6ac1c6b0eeec.ngrok.io/api/category/')
      .then(res => res.json())
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
            <div className="years__animal-title">Котики🐈</div>
            <div className="years__pie-container">
              <Pie data={cats} />
            </div>
          </div>
          <div className="years__animal">
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
