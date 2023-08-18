import React, { useState } from 'react';
import './App.css';
import 'src/css/global.scss';
import 'src/css/reset.scss';
import PieChart from './features/PieChart/PieChart';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const colors = [
  '#eb5757',
  '#f2994a',
  '#6fcf97',
  '#9b51e0',
  '#2f80ed',
  '#56ccf2',
  '#219653',
  '#f2c94c',
];

const randomData = () => {
  const randomLength = getRandomInt(1, 8);
  let data = [];
  for (let i = 0; i <= randomLength; i++) {
    data.push({
      value: getRandomInt(1, 100),
      color: colors[i],
    });
  }
  return data;
};

function App() {
  const [data, setData] = useState(randomData());

  const handleRefresh = () => {
    setData(randomData());
  };

  return (
    <div className="App">
      <PieChart data={data} onClick={handleRefresh} size={350} />
    </div>
  );
}

export default App;
