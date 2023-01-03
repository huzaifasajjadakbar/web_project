import { Link } from "react-router-dom";
import "./CSS/NAVBAR.css";


const Navbar =()=>{

return(

<div   >


  <nav   class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
    <div  style={{}} class="container-fluid">
      <Link style= {{color:"wheat"}}class="navbar-brand" to="/">knowledge Export</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/MAIN">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Login">LOGIN</Link>
          </li>
          <li class="nav-item">
            < Link class="nav-link " to="/SIGNUP">SIGNUP</Link>
          </li>
          <li class="nav-item">
            < Link class="nav-link " to="/ADMIN">ADMIN</Link>
          </li>
          <li class="nav-item">
            < Link class="nav-link " to="/JOB">JOB</Link>
          </li>
   
    
        </ul>
        <form  style={{backgroundColor:"black"}} role="search">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>






</div>






);



}
export default Navbar;