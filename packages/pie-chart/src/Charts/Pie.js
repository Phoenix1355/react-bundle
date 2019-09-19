/**
 * PieChart
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { colorFactory } from '../utils/colors';

console.log(colorFactory);

const PieChart = ({
  values,
  options,
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
  const getCoordsFromPercent = (percent, offset = 0, radius = 1) => {
    const x = Math.cos(2 * Math.PI * percent + offset) * radius;
    const y = Math.sin(2 * Math.PI * percent + offset) * radius;

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

    const offset = 90;

    const rotation = 360 * getCumulativeRotation.val - offset;
    getCumulativeRotation.val += percent;

    return rotation;
  };

  const texts = [];

  return (
    <div className="pie-chart">
      <svg
        width="400"
        height="400"
        viewBox="-1 -1 2 2"
        style={{
          position: 'relative',
        }}
      >
        {values.map((val) => {
          const radius = 0.5;

          const percent = val / total;

          const [x, y] = getCoordsFromPercent(percent, 0, radius);
          const rotation = getCumulativeRotation(percent);

          const [textX, textY] = getCoordsFromPercent(percent / 2, rotation / 360 * (2 * Math.PI), 0.75);

          const flag = percent > 0.5 ? 1 : 0;

          const color = colorFactory.next().value;

          if (options.displayValues) {
            texts.push(
              <text
                x={textX}
                y={textY}
                fill="#777"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontSize: '0.12px',
                }}
              >
                {`${percent * 100}%`}
              </text>
            );
          }

          return (
            <path
              key={`${x}-${y}-${rotation}`}
              d={`
                  M ${radius} 0
                  A ${radius} ${radius} 0 ${flag} 1 ${x} ${y}
                  L 0 0
                  Z
                `}
              transform={`rotate(${rotation})`}
              fill={color}
            />
          );
        })}
        {texts}
      </svg>
    </div>
  );
};
PieChart.propTypes = {
  // Values supplied to make up the chart
  values: PropTypes.arrayOf(PropTypes.number).isRequired,

  // Display options for the chart
  options: PropTypes.shape({
    // If the values should be displayed next to each cut
    displayValues: PropTypes.bool,
  }),

  // Enables a background circle for debugging
  debug: PropTypes.bool,
};
PieChart.defaultProps = {
  options: {
    displayValues: false,
  },
  debug: false,
};

export default PieChart;
