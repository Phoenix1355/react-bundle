/**
 * PieChart
 */

import React from 'react';
import PropTypes from 'prop-types';
import { colorFactory } from '../utils/colors';

console.log(colorFactory);

const PieChart = ({
  values,
  debug,
}) => {
  const total = values.reduce((a, b) => a + b, 0);

  let cumulativePercent = 0;

  const paths = values.map((val) => {
    const percent = val / total;
    console.log(total, percent);
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    const rotation = 360 * cumulativePercent;
    const flag = percent > 0.5 ? 1 : 0;

    cumulativePercent += percent;

    return {
      x,
      y,
      rotation,
      flag,
    };
  });

  return (
    <div className="pie-chart">
      <svg
        width="200"
        height="200"
        viewBox="-1 -1 2 2"
        style={{ transform: 'rotate(-0.25turn)' }}
      >
        {debug && (<circle cx="0" cy="0" r="1" fill="white" />)}
        {paths.map(({
          x,
          y,
          rotation,
          flag,
        }) => (
          <path
            key={`${x}-${y}-${rotation}`}
            d={`
              M 1 0
              A 1 1 0 ${flag} 1 ${x} ${y}
              L 0 0
              Z
            `}
            transform={`rotate(${rotation})`}
            fill={colorFactory.next().value}
          />
        ))}
      </svg>
    </div>
  );
};
PieChart.propTypes = {
  // Values supplied to make up the chart
  values: PropTypes.arrayOf(PropTypes.number).isRequired,

  // Enables a background circle for debugging
  debug: PropTypes.bool,
};
PieChart.defaultProps = {
  debug: false,
};

export default PieChart;
