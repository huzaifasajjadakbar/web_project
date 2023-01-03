
import "../CSS/htmlsider.css";
import { useNavigate } from "react-router-dom";

function JAVASIDER() {
const Navigate=useNavigate();
const goback=()=>{

Navigate(-1);

}

    return ( <div>






<div class="sidebar" >
  <a class="active" href="#home">JAVA INTRO</a>
  <a href="#news">JAVA basic</a>
  <a href="#contact">JAVA elements</a>
  <a href="#about">JAVA attributes</a>
  <a href="#about">JAVA heading</a>
  <a href="#about">solution</a>

</div>



<button class="btn btn-danger" style={{position:"relative",left:"0%"}} onClick={goback}>GO BACK</button>



























    </div> );
}

export default JAVASIDER;