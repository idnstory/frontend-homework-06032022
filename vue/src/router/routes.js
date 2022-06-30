import {
  Dashboard
} from 'layouts';

import {
  Work
} from 'pages';

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Dashboard,
    children: [
      {
        path: '/*',
        name: 'Work',
        components: {
          area: Work
        }
      }
    ]
  }
];
