import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Auth from './hoc/auth';
import Header from './components/Header';
import Postcard from './pages/postcard/Postcard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import PostcardNew from './pages/postcardNew/PostcardNew';
import NotFound from './pages/notFound/NotFound';

const App = ({ common }) => {
  const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
      display: none; /* Remove scrollbar */
    }
    body {
      -ms-overflow-style: none; /* Remove scrollbar */
      ${common.fixScrollbar && 'overflow: hidden'};
      ${common.fixScrollbar && 'height: 100%'};
    }
    body * {
      ${common.fixScrollbar && 'touch-action: none'};
    }
  `;

  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Auth(Postcard, false)} />
          <Route exact path="/postcard" component={Auth(Postcard, false)} />
          <Route exact path="/signup" component={Auth(Register, false)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route
            exact
            path="/postcard/new"
            component={Auth(PostcardNew, true)}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

function mapStateToProps({ common }) {
  return { common };
}

export default connect(mapStateToProps)(App);
