import React from "react";
import { FaRegUser } from "react-icons/fa";
import {RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const LoginInfo = () => {
  return (
    <>
      <div className="info-wrapper">
        <form action="">
          <div className="info-form-items d-flex flex-column gap-3">
            <div className="input-fluid-item">
              <span>
                <FaRegUser />
              </span>
              <input type="text" placeholder="Username / Email" />
            </div>
            <div className="input-fluid-item">
              <span>
                <RiLockPasswordLine />
              </span>
              <input type="password" placeholder="Password" />
            </div>
          <div className="d-flex justify-content-center">
          <button className="custom-btn login-btn" type="submit" >Sign In</button>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginInfo;
