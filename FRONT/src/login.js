import './CSS/login.css';
import { Ref, useEffect, useRef, useState } from 'react';
import Navbar from './navbar';
import SNAVBAR from './smallnav';
import FOOTER from './footer';
import { useNavigate } from 'react-router-dom';
import { insertData } from "./Server/api.js";
import { Link } from 'react-router-dom';




function Login() {


const navigate=useNavigate();
const [Data,setData]=useState([{Email:"",pass:""}]);




const handleChange = (e) => {
    setData({...Data,[e.target.name]:e.target.value})
 
  
}


const submitform =(e)=> {

    e.preventDefault();
  insertData(Data);

console.log(Data);


}






    return (





        <body >
            <Navbar/>
            <SNAVBAR/>
            
                

            <section class="h-100 gradient-form" style={{backgroundcolor:" #eee",marginLeft:"15%"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center" >
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{width: "185px"}} alt="logo"/>
                  <h4 class="mt-1 mb-5 pb-1">KNOWLEDGE Expert</h4>
                </div>

                <form>
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <input id="form2Example11" 
                      placeholder="Phone number or email address" name="Email" onChange={(e)=> handleChange(e) } />
                    <label class="form-label" for="form2Example11">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input  id="form2Example22" name="pass" onChange={(e)=> handleChange(e) }/>
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button style={{color:"black"}} onClick={(e)=> submitform(e)} >Log
                      in</button>
                    <a class="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                  <Link to="/SIGNUP">  <button type="button" class="btn btn-outline-danger">Create new</button></Link>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4" style={{color:"black"}}>“Education is the most powerful weapon which you can use to change the world.”
</h4>
                <p class="small mb-0">
                    
                    </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







        
            <div style={{backgroundColor:"gray",position:"absolute",width:"100%",marginTop:"10%"}}>
<FOOTER/>
</div>  

        </body>







    );








}
export default Login;
