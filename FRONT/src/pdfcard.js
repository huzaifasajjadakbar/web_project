import { useState } from "react";

function CARDSpdf() {
  const[card,setcard]=useState([
    {id:1,title:"HTML",pag:"HTML full Detail course video ",image :<img src={require('./pics/html.jpg')} alt="nolodead" style = {{height: "30vh" , width : " 100%"}}/>,btn:<a href="https://www.youtube.com/watch?v=GpcMasRWUhI&list=PL0b6OzIxLPbxStBQ21C2toa5uQMqHEoRT" target="_blank" style={{textDecoration:"none",fontSize:"20px",color:"white" }}>LINK</a>},
    {id:1,title:"JAVA",pag:"JAVA full  Detail course video",image :<img src={require('./pics/java.webp')} alt="nolodead" style = {{height: "30vh", width :" 100%"}}/>,btn:<a style={{textDecoration:"none",fontSize:"20px",color:"white" }}    href="https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" target="_blank">LINK</a>},
    {id:1,title:"C++",pag:" C ++ full Detail course        ",image :<img src={require('./pics/c++.webp')} alt="nolodead" style = {{height: "30vh", width :" 100%"}}/>,btn:<a style={{textDecoration:"none",fontSize:"20px",color:"white" }}   href="https://www.youtube.com/watch?v=j8nAHeVKL08&list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL" target="_blank">LINK</a>}

   ])
   
   

   function onclick(){



   }
   return ( 
<div style={{display:"flex" }}>


{


card.map((cardre)=>(

    <div>





<div class="card" style={{width: "20rem",marginLeft:"150px",marginTop:"10%"}}>
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

export default CARDSpdf;