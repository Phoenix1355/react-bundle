/**
 * Default module listing
 */

import PageTransition from '../modules/PageTransition';
import SemanticUI from '../modules/SemanticUI';
import Glitch from '../modules/glitch';
import PieChart from '../modules/PieChart';

export default [
    {
        id: 1,
        title: 'Page Transition',
        date: '24. Jan, 2019',
        to: '/page-transition',
        component: PageTransition,
    },
    {
        id: 2,
        title: 'Semantic UI',
        date: '26. Jan, 2019',
        to: '/sematic-ui',
        component: SemanticUI,
    },
    {
        id: 3,
        title: 'Glitch',
        date: '30. Jan, 2019',
        to: '/glitch',
        component: Glitch,
    },
    {
        id: 3,
        title: 'Pie Chart',
        date: '19. Sep, 2019',
        to: '/pie-chart',
        component: PieChart,
    },
];
