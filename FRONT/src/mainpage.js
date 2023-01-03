import Navbar from "./navbar";
import SNAVBAR from "./smallnav";
//cards
import CARDS from "./cards";
import CARDSpdf from "./pdfcard";
//footer
import FOOTER from "./footer";
//css
import "./CSS/mainpage.css";
import "./CSS/video.css";
import  "./CSS/style.css";
import Slider from "./slider";
import SIDER from "./sidernav/htmlsider";
import SLIDER from "./sidernav/slider";
import { Link } from "react-router-dom";


function MAIN() {



    return ( <div  >


<Navbar/>
<SNAVBAR/>

{/* cardsdiv */}


<div id="cards">
    <marquee direction="right"><h2 style={{fontWeight:"bold"}}> NOTES SECTION</h2></marquee>
<CARDS/>

</div>


<div id="cardspdf">
<marquee direction="right"><h2 style={{fontWeight:"bold",color:"wheat"}}>VIDEO SECTION </h2></marquee>
<CARDSpdf/>

</div>



<div style={{backgroundColor:"gray",height:"1300px"}}>
<marquee direction="right"><h2 style={{fontWeight:"bold",color:"wheat"}}>LEARNING</h2></marquee>
                 

<video width="750" height="500" controls  style={{marginLeft:"25%"}}>
      <source src={require("./pics/video.mp4")} type="video/mp4"/>
</video>

<video width="750" height="500" controls  style={{marginLeft:"25%"}}>
      <source src={require("./pics/10.mp4")} type="video/mp4"/>
</video>

</div>






<Link to="/JOB"><marquee direction="right"><h2 style={{fontWeight:"bold"}}> click for Jop </h2></marquee></Link>


<div >

<div style={{backgroundColor:"black",position:"absolute",width:"100%",marginTop:"2%"}}>
<FOOTER/>
</div>

</div>







</div>        
   



    );

  
}

export default MAIN;