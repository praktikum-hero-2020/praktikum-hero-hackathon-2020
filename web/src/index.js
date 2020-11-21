/* Libs */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Styles */
import './styles/main.scss';
/* Constants */
import { Provider } from './components/Provider/Provider';
/* Components */
import RoadMap from './components/RoadMap/RoadMap';

const App = () => {
  return (
    <Provider>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={RoadMap} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
