import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Auth from './hoc/auth';
import Header from './components/Header';
import About from './pages/about/About';
import Postcard from './pages/postcard/Postcard';
import Cinema from './pages/cinema/Cinema';
import Contact from './pages/contact/Contact';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import PostcardNew from './pages/postcardNew/PostcardNew';

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
          {/* <Route exact path="/" component={Auth(About, false)} /> */}
          <Route exact path="/" component={Auth(Postcard, false)} />
          <Route exact path="/photography" component={Auth(Postcard, false)} />
          {/* <Route path="/cinematography" component={Auth(Cinema, false)} />
          <Route path="/contact" component={Auth(Contact, false)} /> */}
          <Route path="/signup" component={Auth(Register, false)} />
          <Route path="/login" component={Auth(Login, false)} />
          {/* <Route path="/photography/new" component={Auth(PostcardNew, true)} /> */}
          <Route path="/photography/new" component={Auth(PostcardNew, false)} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

function mapStateToProps({ common }) {
  return { common };
}

export default connect(mapStateToProps)(App);
