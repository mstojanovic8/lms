import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from './containers';
import ProtectedRoute from './components/ProtectedRoute';
import * as selectors from './redux/selectors';
import routes from './routes';

const App = () => {
  const hasToken = useSelector((state) => {
    selectors.getHasToken(state);
  });
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
