import React, { useState } from "react";
import styles from "./login.module.css";
// import Navbar from "../Home/Navbar";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUp = () => {
    setIsSignIn(false);
  };

  const handleSignIn = () => {
    setIsSignIn(true);
  };

  const containerClassName = `${styles.container} ${
    isSignIn ? "" : styles.right_panel_active
  }`;

  return (
    <div>
      <div id="container" className={containerClassName}>
        <div className={`${styles.form_container} ${styles.signup_container}`}>
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className={`${styles.form_container} ${styles.signin_container}`}>
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className={`${styles.overlay_container}`}>
          <div className={`${styles.overlay}`}>
            <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className={`${styles.ghost}`} onClick={handleSignIn}>
                Sign In
              </button>
            </div>
            <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
              <h1>New here?</h1>
              <p>Sign up now and start journey with us</p>
              <button className={`${styles.ghost}`} onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
