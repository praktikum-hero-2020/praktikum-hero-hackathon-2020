/* Libs */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
/* Styles */
import './styles/main.scss';
/* Constants */
import { Provider } from './components/Provider/Provider';
import Header from './components/Header/Header';
import RoadMap from './components/RoadMap/RoadMap';
/* Components */

const App = () => {
  return (
    <Provider>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/project" component={RoadMap} />
            <Redirect from="/" to="/main" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
