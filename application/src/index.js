import './config';
import './styles.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import configureStore from './redux/store/configureStore';
import { manageInitialState } from './redux/reducers/global/initialState';
import './styles.css';
window.LMS = {
  render: (element) => {
    const store = configureStore(manageInitialState());
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
      element
    );
  },
};
