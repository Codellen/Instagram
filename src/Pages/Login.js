import React, { useState } from "react";
import firebaseApp from "../firebase";
import "./Login.css";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function login() {
   signInWithEmailAndPassword(auth, email, password)
     .then((value) => console.log("userexist", value))
     .catch((error) => console.log(error));
  }

  return (
    <div className="signup-container">
      <h2>Login Page</h2>
      <form>
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
         
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></input>
     <label htmlFor="password">Password</label>
        <input
          type="password"
          
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        ></input>
      </form>

      <button onClick={login}>Login</button>
      <button className="google-signin-button">Login with Google</button>
      <button  className="forgot-password-button">Forgot Password</button>
    </div>
  );
};
export default Login;
