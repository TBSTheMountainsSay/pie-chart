import React from 'react';
import styles from './PieChart.module.scss';
import Portion from '../../Portion/Portion';

const PieChart = ({ data, onClick, size }) => {
  const sum = data
    .map((item) => item.value)
    .reduce((sum, item) => sum + item, 0);

  const proportions = data.map((item) => ({
    ...item,
    proportion: (item.value / sum) * 100,
  }));

  const maxProportion = Math.max(...proportions.map((item) => item.proportion));

  const koef = size / 4;
  const radius = size / 2;

  return (
    <div
      className={styles.pieChart}
      onClick={onClick}
      style={{ width: size, height: size }}
    >
      {proportions.map((item, index) => {
        const offset = proportions
          .filter((proportion, filterIndex) => filterIndex <= index)
          .map((item) => item.proportion)
          .reduce((sum, item) => sum + item, 0);

        return (
          <Portion
            radius={(item.proportion * (radius - koef)) / maxProportion + koef}
            portion={item.proportion}
            stroke={item.color}
            offset={offset - item.proportion}
            key={index}
          />
        );
      })}
      <div
        className={styles.circle}
        style={{ width: size * 0.2, height: size * 0.2 }}
      />
    </div>
  );
};

export default PieChart;
