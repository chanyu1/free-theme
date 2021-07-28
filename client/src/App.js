import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './hoc/auth';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PhotoNew from './components/photos/PhotoNew';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Auth(Landing, false)} />
              <Route path="/login" component={Auth(Login, false)} />
              <Route path="/register" component={Auth(Register, false)} />
              <Route exact path="/photos" component={Auth(Dashboard, true)} />
              <Route path="/photos/new" component={Auth(PhotoNew, true)} />
              {/* <Route component={PageNotFount} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
