import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authUser } from '../_actions';

// null  => 아무나 출입 가능한 페이지
// true  => 로그인한 유저만 출입 가능한 페이지
// false => 로그인한 유저는 출입 불가능한 페이지
export default (SpecificComponent, option, adminRoute = null) => {
  const AuthenticationCheck = ({ history }) => {
    const dispatch = useDispatch();
    useEffect(() => {
      // console.log('hoc auth useEffect');
      dispatch(authUser(history, option, adminRoute));
    }, []);
    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};
