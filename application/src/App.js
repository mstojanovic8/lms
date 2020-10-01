import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './containers';
import ProtectedRoute from './components/ProtectedRoute';
import * as selectors from './redux/selectors';
import routes from './routes';
import { getUsersInfo } from './redux/actions/users';
import './styles.css';

const App = () => {
  const hasToken = useSelector((state) => {
    return selectors.getHasToken(state);
  });
  const isUserInitialized = useSelector((state) => {
    return selectors.getIsUsersInitialized(state);
  });
  if (hasToken) {
    const dispatch = useDispatch();
    dispatch(getUsersInfo());
  }
  return (
    <Switch>
      <Route path='/login' component={Login} />
      {routes.map((route) => (
        <ProtectedRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default App;
