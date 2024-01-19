import { useState , useContext } from "react";
import { FaDirections, FaHamburger } from "react-icons/fa";
const Navbar =() =>{
    const [set,Setset] = useState(false);
    const mail= localStorage.getItem('mail')
    return(<>
   
    <div style={{height:"80px",width:"full",backgroundColor:"aqua",display:"flex"}}>
<div style={{height:"100%",width:"10%",border:"2px solid black",fontSize:"40px",}}>
    <div style={{marginLeft:"40px",marginTop:"20px"}}><button onClick={()=>{Setset(!set)}} style={{height:"50px",width:"50px",fontSize:"100%",backgroundColor:"aqua",}}><FaHamburger /></button></div>

</div>
<div style={{height:"100%",width:"90%",border:"2px solid black"}}>

</div>
    </div>
    <div style={{height:"550px",width:"150px",backgroundColor:"yellow",borderRadius:"8px",display:set ? "flex" : "none"}}>
<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
<div>
 <a href="/Home">Home</a>
</div>
<div >
     <a href="/cards">Delivery</a>
</div>
<div>
    accepted delivery
</div>
<div>
    contact us
</div>
<div>
    about us
</div>
</div>
    </div>
    <div>email:{mail}</div>
    </>);
}
export default Navbar;