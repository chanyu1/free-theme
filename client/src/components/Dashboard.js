import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import PhotoList from './photos/PhotoList';

function Dashboard() {
  return (
    <Fragment>
      <Header />
      <PhotoList />
      <div className="fixed-action-btn">
        <Link
          style={{ position: 'absolute', bottom: '50px', right: '50px' }}
          to="/photos/new"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </Fragment>
  );
}

export default withRouter(Dashboard);
