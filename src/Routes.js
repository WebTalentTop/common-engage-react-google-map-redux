import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from './components/index';
import { RiskForm } from './modules/index';
import configureStore from './store/configureStore';

const store = configureStore();

export default class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact path="/" render={() => (
                <App>
                  <RiskForm />
                </App>
            )}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
