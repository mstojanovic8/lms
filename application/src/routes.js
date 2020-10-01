import * as Containers from './containers';

const routes = [
  {
    path: '/',
    exact: true,
    component: Containers.Home,
  },
  {
    path: '/courses',
    exact: true,
    component: Containers.Courses,
  },
];

export default routes;
