import React from "react";
import { useState } from "react";
import LoginInfo from "../components/LoginItem/LoginInfo";
const LoginRegisterPage = () => {
  const [isInfoShow, setInfoShow] = useState(1);
  const handleShow = (index) => {
    setInfoShow(index);
  };
  return (
    <>
      <div className="login-sign-up ">
        <div className="container">
          <div className="login-sign-up-wrapper">
            <div className="login-sign-up-header">
              <h2>Login</h2>
            </div>
            <div className="login-sign-up-content">
            <LoginInfo />    
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegisterPage;
