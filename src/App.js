// import { initializeApp } from "firebase/app";
// import { getDatabase,ref,set } from "firebase/database";
// import firebaseApp from "./firebase";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { Route,Routes } from "react-router-dom";
//  const database = getDatabase(firebaseApp);
const App = () => {
  

 //here we write code which bascillay add to our realtime database

 //we create one function which add that data

//  function addData()
//  {
//     set(ref(database,'users/sumeet'),{
//       id:1,
//       age:20,
//       name:"Sumeet Turkar",
//       email:"sumitturkar2373@gmail.com"
//     })
//  }


  return (
    // <div>
    //   <h1>Instagram</h1>
    //   <button onClick={addData}>Add Data</button>
    // </div>
    <div>
      <Routes>
        <Route path="/" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
  
};

export default App;
