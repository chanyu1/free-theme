import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Header from './components/views/Header/Header';
import Auth from './hoc/auth';
import Landing from './components/views/Landing/Landing';
import Login from './components/views/Login/Login';
import Register from './components/views/Register/Register';
import Dashboard from './components/views/Dashboard/Dashboard';
import Photos from './components/views/Photos/Photos';
import PhotosNew from './components/views/Photos/PhotosNew';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Auth(Landing, null)} />
              <Route path="/login" component={Auth(Login, false)} />
              <Route path="/register" component={Auth(Register, false)} />
              <Route path="/dashboard" component={Auth(Dashboard, true)} />
              <Route exact path="/photos" component={Auth(Photos, true)} />
              <Route path="/photos/new" component={Auth(PhotosNew, true)} />
              {/* <Route component={PageNotFount} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
