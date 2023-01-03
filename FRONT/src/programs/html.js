import FOOTER from "../footer";
import Navbar from "../navbar";
import SIDER from "../sidernav/htmlsider";
import SNAVBAR from "../smallnav";

function Html() {
    return ( 
        <div>
<Navbar/>
<SNAVBAR/>


<div id="text" style={{width:"100%",height:900,backgroundColor:"wheat",marginLeft:210}} >

<h2 style={{marginLeft:20,marginTop:50,position:"absolute"}}>
What is HTML?
</h2>   
<p style={{position:"absolute" ,marginTop:90,marginLeft:20 ,color:"black" ,fontSize:20 }}>
HTML stands for Hyper Text Markup Language
<br></br>
HTML is the standard markup language for creating Web pages
<br></br>
HTML describes the structure of a Web page
<br></br>
HTML consists of a series of elements


</p>



<h2 style={{marginLeft:20,marginTop:300,position:"absolute"}}>
Example Explained
</h2>   

<p style={{position:"absolute" ,marginTop:400,marginLeft:20 ,color:"black",fontSize:20}}>
The DOCTYPE html declaration defines that this document is an HTML5 document
<br></br>
The html element is the root element of an HTML page
<br></br>
The head element contains meta information about the HTML page
<br></br>
The title element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)



</p>













</div>
<SIDER/>
<div style={{backgroundColor:"gray",position:"absolute",width:"100%",marginTop:"0%"}}>
<FOOTER/>
</div>
        </div>
     );
}

export default Html;