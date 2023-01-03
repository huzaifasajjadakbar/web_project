import { useState } from "react";
import FOOTER from "./footer";
import Navbar from "./navbar";

function JOB() {


    const[card,setcard]=useState([
        {id:1,title:"Build a Website -- 2",pag:"One website to be designed and hosted freshly, ,two website needs revamp, all three to have SSL certificates."},
        {id:1,title:"Build a custom Drupal 9 group",pag:"Install OG module, and configure a new content type called Group as an OG Group.Implement a Pluggable entity view builder (PEVB) plugin to Full view mode of the new Group content type, similar to this example.Add to the PEVB plugin the following logic: Whenever a registered user will visit the group, it should offer to subscribe that user by greeting them with their name: Hi {{ name }}, click here if you would like to subscribe to this group called {{ label }}. Make sure to use OG’s API to check if the user is allowed to subscribe.Add a test to validate the functionality.Link for OG module: https://www.drupal.org/project/og"},
        {id:1,title:"build website and app  ",pag:" need a complete redisign of website . to be built from scratch, not via wordpress or shopify . along with website need android and ios app . website has to be multi vendor . further details will be discussed with the hired freelancer        "}
       ])




    return ( 

        <div >


<Navbar/>

<div style={{width:"100vw",height:"200vh",backgroundColor:"wheat"}}>





<div style={{width:"90%",height:"100%" ,backgroundColor:"white",marginLeft:"19%"}}>


<h1 style={{marginLeft:"30%"}}> JOBS  </h1>


{


card.map((cardre)=>(

    <div>




<div class="card" style={{width: "60rem",marginLeft:"150px" ,marginTop:"10%",height:"30vh"}}>
<p>{cardre.image}</p>
  <div class="card-body">
    <h5 class="card-title">{cardre.title}</h5>
    <p class="card-text" style={{overflow:"scroll"}}>{cardre.pag}</p>
 <button class="btn btn-danger">SUBMIT{cardre.btn} </button>
  </div>
</div>

        </div>









    )
)


}









</div>











</div>






<div style={{backgroundColor:"black",position:"absolute",width:"100%",marginTop:"0%"}}>
<FOOTER/>
</div>



        </div>
     );
}

export default JOB;