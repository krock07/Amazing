import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    //firebase stuff here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();
    //firebase register stuff here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created new user successfully
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://res.cloudinary.com/dh0pbh1ah/image/upload/v1601312530/amazon-logo-rgb-01_kgy6nf_hm4zcg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={signIn} type="submit" className="login_signIn">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZING CLONE conditions of use & sale.
          Please see our Privacy Notice, our cookies notice and our
          Interest-based ads Notice
        </p>
        <button onClick={register} className="login_register">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
