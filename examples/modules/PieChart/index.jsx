/**
 * PageTransition
 *
 * Animation effect for page transitions
 */

import React from 'react';
import { PieChart } from 'packages/pie-chart/lib';

import './style.scss';

const Page = () => (
  <article className="page--pie-chart">
    <PieChart
      values={[10, 20, 30, 40]}
    />
  </article>
);

export default Page;
