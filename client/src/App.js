import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as actions from './_actions';
import Auth from './hoc/auth';
import Header from './components/UI/organisms/Header';
import Landing from './components/pages/Landing';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import PostcardNew from './components/pages/PostcardNew';

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
          <Route exact path="/postcards" component={Auth(Dashboard, true)} />
          <Route path="/postcards/new" component={Auth(PostcardNew, true)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
