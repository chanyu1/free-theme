import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authUser } from '../_actions/userAction';

// null  -> Anyone can enter
// true  -> Only login user can enter
// false -> Login user can not enter
export default (SpecificComponent, option, adminRoute = null) => {
  const AuthenticationCheck = ({ history }) => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser(history, option, adminRoute));
    }, []);

    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};
