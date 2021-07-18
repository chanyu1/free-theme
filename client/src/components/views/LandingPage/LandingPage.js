import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import classes from './LandingPage.module.css';

function LandingPage(props) {
  // useEffect(() => {
  //   Axios.get("/api/hello").then((response) => console.log(response.data));
  // }, []);

  const logoutHandler = () => {
    axios.get('/api/users/logout').then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        props.history.push('/login');
      } else {
        alert('Failed to logout.');
      }
    });
  };

  return (
    <div className={classes.testName}>
      <h2>시작페이지</h2>
      <button onClick={logoutHandler}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);
