import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions';

export default (SpecificComponent, option, adminRoute = null) => {
  // null  => 아무나 출입 가능한 페이지
  // true  => 로그인한 유저만 출입 가능한 페이지
  // false => 로그인한 유저는 출입 불가능한 페이지
  const AuthenticationCheck = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log('auth, ', response);
        if (!response.payload.isAuth) {
          // 로그인하지 않은 상태
          if (option) {
            props.history.push('/login');
          }
        } else {
          // 로그인한 상태
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push('/photos');
          } else if (option === false) {
            props.history.push('/photos');
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  };
  return AuthenticationCheck;
};
