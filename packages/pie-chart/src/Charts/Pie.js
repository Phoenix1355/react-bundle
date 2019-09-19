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

  /**
   * Return x and y coordinates in the set [0, 1] based on the percentage value.
   * Assumes the percentage is given in the set [0, 1].
   *
   * @param {Number}  percent The percentage
   * @returns {Array}         An array with the x and y values.
   */
  const getCoordsFromPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);

    return [x, y];
  };

  /**
   * Returns a rotation based on the previous percentages, for aligning all the
   * chart cuts. Assumes the percentage is given in the set [0, 1].
   *
   * @param {Number} percent The percentage
   */
  const getCumulativeRotation = (percent) => {
    if (typeof getCumulativeRotation.val === 'undefined') {
      getCumulativeRotation.val = 0;
    }

    const rotation = 360 * getCumulativeRotation.val;
    getCumulativeRotation.val += percent;

    return rotation;
  };

  return (
    <div className="pie-chart">
      <svg
        width="200"
        height="200"
        viewBox="-1 -1 2 2"
        style={{ transform: 'rotate(-0.25turn)' }}
      >
        {debug && (<circle cx="0" cy="0" r="1" fill="white" />)}
        {values.map((val) => {
          const percent = val / total;

          const [x, y] = getCoordsFromPercent(percent);
          const rotation = getCumulativeRotation(percent);

          const flag = percent > 0.5 ? 1 : 0;

          return (
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
          );
        })}
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
