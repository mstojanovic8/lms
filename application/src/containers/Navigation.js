import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

const Navigation = ({}) => {
  return <div>Navigacija</div>;
};

Navigation.propTypes = forbidExtraProps({});
export default memo(Navigation);
