import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './_actions';
import Auth from './hoc/auth';
import Header from './components/Header';
import Landing from './components/Landing';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Dashboard from './components/Dashboard';
import PhotoNew from './components/photos/PhotoNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Auth(Landing, false)} />
          <Route path="/signup" component={Auth(Register, false)} />
          <Route path="/login" component={Auth(Login, false)} />
          <Route exact path="/photos" component={Auth(Dashboard, true)} />
          <Route path="/photos/new" component={Auth(PhotoNew, true)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
