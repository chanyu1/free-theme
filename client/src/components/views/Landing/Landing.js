import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  // useEffect(() => {
  //   axios.get("/api/hello").then((response) => console.log(response.data));
  // }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Link to="/register">가입하기</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default Landing;
