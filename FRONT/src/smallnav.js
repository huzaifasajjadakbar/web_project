import "./CSS/snavbar.css";
import { Link, useNavigate } from "react-router-dom";

function SNAVBAR() {
  const nav = useNavigate();


  const gotohtml = (e) => {

    nav('/html');




  }
  
  const gotocpro = (e) => {

    nav('/CPROGRAM');




  }
  const gotocjava = (e) => {

    nav('/JAVA');




  }
  return (

    <div>





      <div class="topnav">
        <a class="active" href="#home">Langauges</a>
        <a style={{ color: "white" }} onClick={() => gotocpro()}>C</a>
        <a style={{ color: "white" }} onClick={() => gotocjava()}>JAVA</a>

        <a style={{ color: "white" }} onClick={() => gotohtml()}>HTML 5</a>
        <Link to="/Clan">C++</Link>

      </div>
    </div>

  );
}

export default SNAVBAR;
