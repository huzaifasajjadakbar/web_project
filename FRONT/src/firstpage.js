
import "./CSS/FIRST.css";
import { Link } from "react-router-dom";
function FIRST() {
    return ( 

<div id="position">




<h1 id="Htag"style={{color:"white"}}>
    WELCOME TO
</h1>
<h2 id="htag" style={{color:"wheat"}} >KNOWLEDGE Expert</h2>

<button id="btn" type="button" class="btn btn-warning">

  <Link to="/MAIN">  LETS START</Link>
</button>


</div>



     );
}

export default FIRST;