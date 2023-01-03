import FOOTER from "../footer";
import Navbar from "../navbar";
import JAVASIDER from "../sidernav/javasider";
import SNAVBAR from "../smallnav";

function JAVA() {
    return ( <div>

<Navbar/>
<SNAVBAR/>


<div id="text" style={{width:"100%",height:900,backgroundColor:"wheat",marginLeft:210}} >
        
        <h2 style={{marginLeft:20,marginTop:50,position:"absolute"}}>
        What is Java?
        </h2>   
        <p style={{position:"absolute" ,marginTop:90,marginLeft:20 ,color:"black" ,fontSize:20 }}>
      It is used for:
        <br></br>
        Mobile applications (specially Android apps)
                <br></br>
                Desktop applications

        <br></br>
        Web applications
        
        
        </p>
        
        
        
        <h2 style={{marginLeft:20,marginTop:300,position:"absolute"}}>
        Why Use Java?
        </h2>   
        
        <p style={{position:"absolute" ,marginTop:400,marginLeft:20 ,color:"black",fontSize:20}}>
        Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
                <br></br>
                It is one of the most popular programming language in the world
        <br></br>
        It has a large demand in the current job market
        <br></br>
        It is easy to learn and simple to use        
        
        
        </p>
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>











<JAVASIDER/>

<div style={{backgroundColor:"gray",position:"absolute",width:"100%",marginTop:"0%"}}>
<FOOTER/>
</div>





    </div> );
}

export default JAVA;