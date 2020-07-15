import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

// styles
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
