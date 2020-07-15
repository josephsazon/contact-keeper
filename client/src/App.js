import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// state
import ContactState from './context/contact/ContactState';

// components
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

// styles
import './App.css';

const App = () => {
  return (
    <ContactState>
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
    </ContactState>
  );
};

export default App;
