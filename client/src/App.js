import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Auth from './hoc/auth';
import Header from './components/Header';
// import ChipList from './components/ChipList';
import Landing from './pages/landing1';
import Register from './pages/register1';
import Login from './pages/login1';
import Dashboard from './pages/dashboard1';
import PostcardNew from './pages/postcardNew1';

const App = ({ fixScrollbar }) => {
  const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
      display: none; /* Remove scrollbar */
    }
    body {
      -ms-overflow-style: none; /* Remove scrollbar */
      ${fixScrollbar && 'overflow: hidden'};
      ${fixScrollbar && 'height: 100%'};
    }
    body * {
      ${fixScrollbar && 'touch-action: none'};
    }
  `;

  return (
    <Fragment>
      <GlobalStyle />
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
    </Fragment>
  );
};
function mapStateToProps({ fixScrollbar }) {
  return { fixScrollbar };
}

export default connect(mapStateToProps)(App);
