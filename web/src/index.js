/* Libs */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
/* Styles */
import './styles/main.scss';
/* Components */
import { Provider } from './components/Provider/Provider';
import Header from './components/Header/Header';
import RoadMap from './components/RoadMap/RoadMap';
import Footer from './components/Footer/Footer';
import TeamInfo from './components/TeamInfo/TeamInfo';
import Main from './components/Main/Main';

const App = () => {
  return (
    <Provider>
      <div className="app">
        <Router>
          <Header />
          <main className="main">
            <div className="main__wrapper">
              <Switch>
                <Route path="/project" component={RoadMap} />
                <Route path="/about" component={TeamInfo} />
                <Route path="/main" component={Main} />
                <Redirect from="/" to="/project" />
              </Switch>
            </div>
            <Footer />
          </main>
        </Router>
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
