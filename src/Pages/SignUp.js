import React,{useState} from "react";
import firebaseApp from "../firebase";
import "./Signup.css"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

const SignUp=()=>{
  let[name,setName] = useState("")
    let[email,setEmail] = useState("");
    let[password,setPassword] = useState("");
    let[confirmPassword,setConfirmPassword] = useState("")

    function handelogin(e)
    {
       e.preventDefault()
      if(name.trim().indexOf(" ")==-1)
      {
        alert("Please Enter Full Name")
        return
      }
      if (email.trim().indexOf("@") == -1) {
        alert("Please Enter Valid Email Id");
        return;
      }
      if (password.length<7) {
        alert("Please Enter Strong Password");
        return;
      }
      if (password != confirmPassword) {
        alert("Your password doesnot match");
        return;
      }
        createUserWithEmailAndPassword(auth, email, password)
          .then((value) => console.log("Signin Succesful", value))
          .catch((error) => console.log(error));
    }

    return (
      <div className="signup-container">
        <h2>SignUp Form</h2>
        <form onSubmit={handelogin}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          ></input>
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
          <label htmlFor="confirm password">Confirm Password</label>
          <input
            type="password"
            
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
          ></input>
          
            <button >Sign Up</button>
         
        </form>
      </div>
    );
}
export default SignUp;