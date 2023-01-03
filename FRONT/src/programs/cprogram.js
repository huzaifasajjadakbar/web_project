import FOOTER from "../footer";
import Navbar from "../navbar";
import CPROGRAMSIDER from "../sidernav/cprosider";
import SNAVBAR from "../smallnav";

function CPROGRAM() {
    return ( <div>


<Navbar/>
<SNAVBAR/>


<div id="text" style={{width:"100%",height:900,backgroundColor:"wheat",marginLeft:210}} >

<h2 style={{marginLeft:20,marginTop:50,position:"absolute"}}>
C Introduction
</h2>   
<p style={{position:"absolute" ,marginTop:90,marginLeft:20 ,color:"black" ,fontSize:20 }}>
C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.
<br></br>
It is a very popular language, despite being old.
<br></br>
C is strongly associated with UNIX, as it was developed to write the UNIX operating system.
<br></br>



</p>



<h2 style={{marginLeft:20,marginTop:300,position:"absolute"}}>
Why Learn C?
</h2>   
<p style={{position:"absolute" ,marginTop:400,marginLeft:20 ,color:"black",fontSize:20}}>
It is one of the most popular programming language in the world
<br></br>
C is very fast, compared to other programming languages, like Java and Python
<br></br>
C is very versatile; it can be used in both applications and technologies
<br></br>



</p>



<h2 style={{marginLeft:20,marginTop:600,position:"absolute"}}>
Difference between C and C++
</h2>   
<p style={{position:"absolute" ,marginTop:700,marginLeft:20 ,color:"black",fontSize:20}}>
C++ was developed as an extension of C, and both languages have almost the same syntax.
<br></br>
The main difference between C and C++ is that C++ support classes and objects, while C does not.



</p>










</div>






<CPROGRAMSIDER/>

<div style={{backgroundColor:"gray",position:"absolute",width:"100%",marginTop:"0%"}}>
<FOOTER/>
</div>



    </div> );
}

export default CPROGRAM;