import "./Login.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { loginHandler} = useAuth();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const testUserCredential = {
    email:  "testuser@gmail.com",
    password: "testuser",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
    setLoginDetails({email:"",password:""})
  };

  return (
    <>
      <div className="login-component">
        <h2>Nice to see you again</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <p>
              Email <span>*</span>
            </p>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="login-details"
              name="email"
              required
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails((userInput) => ({
                  ...userInput,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="password">
            <p>
              Password<span>*</span>
            </p>

            <input
              type="password"
              placeholder="*******"
              className="login-details"
              name="password"
              required
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails((userInput) => ({
                  ...userInput,
                  password: e.target.value,
                }))
              }
            />
          </label>

          <div className="btn-container">
          <button className="login-btn" type="submit">
            Login
          </button>
          <button
            className="testuser-btn"
            type="submit"
            onClick={() => setLoginDetails(testUserCredential)}
          >
            Login as test user
          </button>
          <button className="signup-btn">
            <NavLink to="/signup">Create new account</NavLink>
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
