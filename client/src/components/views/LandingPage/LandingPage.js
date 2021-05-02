import React, { useEffect } from "react";
import axios from "axios";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  const logoutHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("Failed to logout.");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작페이지</h2>
      <button onClick={logoutHandler}>로그아웃</button>
    </div>
  );
}

export default LandingPage;
