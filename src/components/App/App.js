import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import StartPage from '../pages/StartPage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="uk-container">
          <Navbar />
          <Route path="/" exact component={StartPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/dash/" exact component={DashboardPage} />
        </div>
      </Router>

    )
  }
}

export default App;
