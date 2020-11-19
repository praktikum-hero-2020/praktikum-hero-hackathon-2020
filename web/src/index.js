/* Libs */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Styles */
import './styles/main.scss';
/* Constants */
import { Provider } from './components/Provider/Provider';
/* Components */

const App = () => {
  return (
    <Provider>
      <div className="app">
        <Router>
          <Switch>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
