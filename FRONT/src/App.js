


import { Routes, Route } from "react-router-dom";
import FIRST from "./firstpage";
import MAIN from "./mainpage";
import Login from "./login";
import SIGNUP from "./signup";
import ADMIN from "./Admin";
import Html from "./programs/html";
import CPROGRAM from "./programs/cprogram";
import JAVA from "./programs/java";

import { createContext, useState } from "react";
import Counter from "./conter";
import JOB from "./job";
const data = createContext();
function App() {


const[name,setname]=useState("huzaifasajjad");


  return (

    <div>





      <Routes>
        <Route path="" element={<FIRST />} />
        <Route path="/MAIN" element={<MAIN />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SIGNUP" element={<SIGNUP />} />
        <Route path="/Counter" element={<Counter/>} />
        <Route path="/ADMIN" element={

          <data.Provider value={name}>
            <ADMIN />
          </data.Provider>
        } />
      
        <Route path="/html" element={<Html />} />
        <Route path="/CPROGRAM" element={<CPROGRAM />} />
        <Route path="/JAVA" element={<JAVA />} />
        <Route path="/JOB" element={<JOB/>} />
      </Routes>





    </div>




  );
}

export default App;
export { data };