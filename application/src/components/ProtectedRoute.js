import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { getTokenIfExists } from '../utils';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = getTokenIfExists();
  return (
    <Route
      {...rest}
      render={(props) =>
        token !== null ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

ProtectedRoute.propTypes = {};
export default memo(ProtectedRoute);
