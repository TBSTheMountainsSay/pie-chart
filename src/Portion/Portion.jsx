import React from 'react';
import styles from './Portion.module.scss';

const Portion = ({ portion, stroke, radius, offset }) => {
  const diameter = radius * 2;
  const strokeWidth = diameter;
  const strokeDasharray = Math.PI * diameter;
  const strokeDashoffset = (strokeDasharray * (100 - portion)) / 100;
  const rotate = (offset * 360) / 100;

  return (
    <svg
      viewBox={`0 0 ${diameter + strokeWidth} ${diameter + strokeWidth}`}
      fill={'none'}
      stroke={stroke}
      strokeWidth={strokeWidth}
      width={diameter}
      height={diameter}
      style={{ transform: `rotate(${rotate - 90}deg)` }}
      className={styles.svg}
    >
      <circle
        r={radius}
        cx={radius + strokeWidth / 2}
        cy={radius + strokeWidth / 2}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

export default Portion;
