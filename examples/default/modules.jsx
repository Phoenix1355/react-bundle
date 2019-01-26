/**
 * Default module listing
 */

import PageTransition from '../modules/PageTransition';
import SemanticUI from '../modules/SemanticUI';

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
];
