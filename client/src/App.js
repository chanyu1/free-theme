import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import classes from './App.module.css';
import Auth from './hoc/auth';
import Header from './components/Header';
// import ChipList from './components/ChipList';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PostcardNew from './pages/PostcardNew';

const App = (props) => {
  return (
    <BrowserRouter className={classes.fixScrollbar}>
      {console.log(props.fixScrollbar)}
      <Header />
      {/* <ChipList /> */}
      {/* <Switch className={`${props.fixScrollbar && classes.fixScrollbar}`}> */}
      <Switch>
        <Route exact path="/" component={Auth(Landing, false)} />
        <Route path="/signup" component={Auth(Register, false)} />
        <Route path="/login" component={Auth(Login, false)} />
        <Route exact path="/postcards" component={Auth(Dashboard, true)} />
        <Route path="/postcards/new" component={Auth(PostcardNew, true)} />
      </Switch>
    </BrowserRouter>
  );
};
function mapStateToProps({ fixScrollbar }) {
  return { fixScrollbar };
}

export default connect(mapStateToProps)(App);
