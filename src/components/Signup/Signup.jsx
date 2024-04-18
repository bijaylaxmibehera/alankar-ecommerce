import "./Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import React from "react";

const Signup = () => {
  const [signupInfo, setSignUpInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signupHandler } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    signupHandler(signupInfo);
    setSignUpInfo({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <div className="signup-container">
        <h3>Sign up</h3>
        <form onSubmit={handleSignup}>
          <label htmlFor="firstname">
            <p>First Name</p>
            <input
              type="text"
              className="signup-input"
              placeholder="John"
              name="firstName"
              required
              value={signupInfo.firstName}
              onChange={(e) =>
                setSignUpInfo((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="lastname">
            <p>Last Name</p>
            <input
              type="text"
              className="signup-input"
              placeholder="Doe"
              name="lastName"
              required
              value={signupInfo.lastName}
              onChange={(e) =>
                setSignUpInfo((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              className="signup-input"
              placeholder="john@gmail.com"
              value={signupInfo.email}
              onChange={(e) =>
                setSignUpInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              className="signup-input"
              placeholder="********"
              required
              value={signupInfo.password}
              onChange={(e) =>
                setSignUpInfo((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </label>
          <label htmlFor="confirmPassword">
            <p>Confirm Password</p>
            <input
              type="password"
              className="signup-input"
              placeholder="********"
              required
              value={signupInfo.confirmPassword}
              onChange={(e) =>
                setSignUpInfo((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </label>
          <label className="signUp_label_accept">
            <input type="checkbox" required />
            <p>I accept terms and conditions</p>
          </label>
          <div className="btn-container">
            <button type="submit" className="signUp_btn">
              <p>Sign Up</p>
            </button>

            <button className="signUp_btn_login">
              <Link className="primary-btn" to="/login">
                <p>Already have an account?</p>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
