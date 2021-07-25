import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Header/Header';

function Dashboard() {
  return (
    <div>
      <Header />
      Dashboard
    </div>
  );
}

export default withRouter(Dashboard);
