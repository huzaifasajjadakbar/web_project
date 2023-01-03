import { useState } from "react";
import { Link } from "react-router-dom";

function CARDS() {
   const[card,setcard]=useState([
    {id:1,title:"HTML",pag:"HTML Detail notes",image :<img src={require('./pics/html.jpg')} alt="nolodead" style = {{height: "30vh" , width : " 100%"}}/>,btn:<a href="https://drive.google.com/drive/folders/1IxtegkXll-2guSqm9ZHe3wr_jqAfOx5W?usp=sharing" target="_blank" style={{textDecoration:"none",fontSize:"20px",color:"white" }}>DOWNLOADL</a>},
    {id:1,title:"JAVA",pag:"JAVA Detail notes",image :<img src={require('./pics/java.webp')} alt="nolodead" style = {{height: "30vh", width :" 100%"}}/>,btn:<a style={{textDecoration:"none",fontSize:"20px",color:"white" }}    href="https://drive.google.com/drive/folders/1IxtegkXll-2guSqm9ZHe3wr_jqAfOx5W?usp=sharing" target="_blank">DOWNLOADL</a>},
    {id:1,title:"C++",pag:"C ++ Detail notes",image :<img src={require('./pics/c++.webp')} alt="nolodead" style = {{height: "30vh", width :" 100%"}}/>,btn:<a style={{textDecoration:"none",fontSize:"20px",color:"white" }}   href="https://drive.google.com/drive/folders/1IxtegkXll-2guSqm9ZHe3wr_jqAfOx5W?usp=sharing" target="_blank">DOWNLOADL</a>}

   ])
   






   
   return ( 
<div style={{display:"flex"}}>


{

card.map((cardre)=>(

    <div>





<div class="card" style={{width: "20rem",marginLeft:"150px" ,marginTop:"10%"}}>
<p>{cardre.image}</p>
  <div class="card-body">
    <h5 class="card-title">{cardre.title}</h5>
    <p class="card-text">{cardre.pag}</p>

 <button class="btn btn-danger">{cardre.btn}</button>

  </div>
</div>

        </div>









    )
)


}



























</div>




     );
}

export default CARDS;