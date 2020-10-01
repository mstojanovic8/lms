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
  {
    path: '/me',
    exact: true,
    component: Containers.User,
  },
  {
    path: '/team',
    exact: true,
    component: Containers.Team,
  },
];

export default routes;
