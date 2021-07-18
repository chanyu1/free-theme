import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/views/Header/Header';
import LandingPage from './components/views/LandingPage/LandingPage';
import PhotoPage from './components/views/PhotoPage/PhotoPage';
// import VideoPage from './components/views/VideoPage/VideoPage';
// import LoginPage from './components/views/LoginPage/LoginPage';
// import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route path="/photo" component={Auth(PhotoPage, null)} />
            {/* <Route path="/login" component={Auth(LoginPage, false)} /> */}
            {/* <Route path="/register" component={Auth(RegisterPage, false)} /> */}
            {/* <Route component={PageNotFount} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
