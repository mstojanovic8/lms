import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../containers/Navigation';

export default function withNavigation(WrappedComponent) {
  const Dashboard = ({ match, ...rest }) => {
    const { path } = match;

    return (
      <Fragment>
        <Navigation />
        <WrappedComponent match={match} {...rest} />
      </Fragment>
    );
  };

  Dashboard.propTypes = {
    match: PropTypes.instanceOf(Object).isRequired
  };

  return Dashboard;
}
