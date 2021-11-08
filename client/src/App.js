import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Auth from './hoc/auth';
import Header from './components/Header';
// import ChipList from './components/ChipList';
import Landing from './pages/landing/Landing';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import PostcardNew from './pages/postcardNew/PostcardNew';

// const App = ({ postcards }) => {
const App = ({ pstcards, fixScrollbar }) => {
  // const [isFixScrollbar, setIsFixScrollbar] = useState(false);

  // useEffect(() => {
  //   setIsFixScrollbar(postcards.fixScrollbar);
  // }, [postcards.fixScrollbar]);

  console.log('app');
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
      {console.log('app1')}
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

function mapStateToProps({ pstcards, fixScrollbar }) {
  return { pstcards, fixScrollbar };
}

// function mapStateToProps({ postcards }) {
//   return { postcards };
// }

export default connect(mapStateToProps)(App);
