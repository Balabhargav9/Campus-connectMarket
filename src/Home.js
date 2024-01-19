import { useEffect, useState } from "react";
import axios from 'axios';
import Paypal from "./paypal";
import {FaHamburger } from "react-icons/fa";
import './Home.css';


const Home = () =>{
  const [checkout,setcheck] = useState(false);
    const [array,setarray] = useState([]);
    const [data,setdata] = useState({name:"",mobileno:"",item:"",price:"",address:""});
    const [name,setname]= useState("");
    const [roll,setroll]=useState("");
    const [item,setitem] = useState("");
    const [price,setprice] = useState("");
    const [address,setadd]=useState("");
    const email = localStorage.getItem('mail');
     localStorage.setItem('payment',false);
     const [set,Setset] = useState(false);
    const Delivery = (e) =>{
e.preventDefault();
setarray([...array,data]);

axios.post("http://localhost:5617/delivery/createorder",{name,email,item,price,address,roll}).then(()=>{console.log("order taken");}).catch((error)=>{console.log(error.message);alert(error.message)});
setname("");setroll("");setitem(""); setprice("");setadd("");
 }
    useEffect(()=>{
        console.log(array);

},[array])
const bala = localStorage.getItem('mail');

    return(<>
    
    
    <div id="body" style={{width:"100%",height:"100%"}}>
    <div id="bn" style={{height:"80px",width:"98%",display:"flex",borderRadius:"20px",marginLeft:"10px"}}>
    <div style={{height:"100%",width:"10%",fontSize:"40px",}}>
    <div style={{marginLeft:"40px",marginTop:"20px"}}><button onClick={()=>{Setset(!set)}} style={{height:"50px",width:"60px",fontSize:"100%",backgroundColor:"black",color:"white",border:"2px white solid"}}><FaHamburger /></button></div>
    </div>
    </div> 
<div style={{display:"flex",height:"100vh",width:"full",justifyContent:"space-around"}}>
<div style={{height:"600px",width:"13%",display:"flex",flexDirection:"column",justifyContent:"center"}}>

  {/* navbar */}
  <div>
  <div id="asso" style={{height:"550px",width:"150px",borderRadius:"8px",display:set ? "flex" : "none"}}>
<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
<div style={{marginLeft:"20px"}}>
 <a href="/Home" style={{color:"black"}}>Home</a>
</div>
<div style={{marginLeft:"20px"}} >
     <a href="/pendingdata" style={{color:"black"}} >delivery fast</a>
</div>
<div style={{marginLeft:"20px"}}>
   <a href="/cards" style={{color:"black"}}>earn money</a> 
</div>
<div style={{marginLeft:"20px"}}>
   <a href="/Contact" style={{color:"black"}}>contact us</a> 
</div>
<div style={{marginLeft:"20px"}}>
    about us
</div>
<div style={{marginLeft:"20px"}}>
   My Earnings
</div>
<div style={{marginLeft:"20px"}}>
  <a href="/profile" style={{color:"black"}}>My Profile</a>
</div>
</div>
    </div>
  </div>
  {/* navbar */}
</div>
<div style={{height:"600px",width:"79%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
  {/* <div id="new" style={{width:"650px",height:"500px",marginBottom:"-502px",marginLeft:"100px",position:"relative",zIndex:"20",border:"1px solid black"}}>

  </div> */}
  <div style={{height:"500px",width:"700px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
  {/* form */}
  <div  style={{border:'2px solid black',backgroundColor:"black",width:"400px",height:"480px",marginLeft:'auto',marginRight:"auto",position:"relative",zIndex:'10',borderRadius:"20px",boxShadow:'9px 9px 9px grey'}}>
  <form onSubmit={Delivery}>
  <div style={{display:"flex",height:"50px",width:"full",marginTop:"40px"}}>
  <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px",color:'white'}}><label for="name">Name:</label></div>  
  <div ><input onChange={(e)=>{setdata({ ...data, name: e.target.value });setname(e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}}  id="name" type="text" value={name} required /></div> 
  </div>
  <div style={{display:"flex",height:"50px",width:"full"}}>
  <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px",color:'white'}}> <label for="phone-no">Roll No:</label></div> 
  <div><input onChange={(e)=>{setdata({ ...data, mobileno: e.target.value });setroll(e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}}  id="phone-no" type="number" value={roll} required /></div>   
  </div>
  <div style={{display:"flex",height:"50px",width:"full"}}>
  <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px",color:'white'}}> <label for="food-item">Give a Task:</label></div>
  <div><input onChange={(e)=>{setdata({ ...data, item: e.target.value });setitem(e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}} id="food-item" type="text"  value={item} required/></div>  
  </div>
  <div style={{display:"flex",height:"50px",width:"full"}}>
  <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px",color:'white'}}><label for="money">PRICE:</label></div>  
  <div><input onChange={(e)=>{setdata({ ...data, price: e.target.value });setprice(e.target.value);localStorage.setItem('price',e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}} id="money" type="number" value={price} required /></div>  
  </div>
  <div style={{display:"flex",height:"50px",width:"full"}}>
  <div style={{width:"100px",fontSize:"18px",paddingLeft:"15px",color:'white'}}><label for="address">ADRESS:</label></div>  
  <div><input onChange={(e)=>{setdata({ ...data, address: e.target.value });setadd(e.target.value)}} style={{border:"2px solid black" , borderRadius:"5px",fontSize:"18px"}} id="address" type="text" value={address} /></div>  
  </div>
  <div style={{height:"50px",width:"full",paddingLeft:"105px"}}>  {
  checkout?(<Paypal/>) :(<div><button style={{height:"50px",width:"200px",fontSize:"30px"}} onClick={()=>{setcheck(true)}}>PAYMENT</button></div>)}
  </div>
  <div style={{height:"20px",width:"full"}}></div>
  <div id="take_delivery" style={{height:"50px",width:"full",marginLeft:"150px",marginTop:"40px"}}>
  <button type="submit" style={{backgroundColor:"white",height:"50px",width:"100px",borderRadius:"5px"}}>TAKE A DELIVERY</button>
  </div>
  </form>
  </div>
 {/* form */}
 </div>
</div>
{/* <div style={{height:"400px",width:"300px",border:"1px solid black"}}>

</div> */}
{/* <div  style={{height:"600px",width:"25%",border:"1px solid black",display:"flex",flexDirection:"column",justifyContent:"center"}}>
<div style={{height:"300px",width:"300px",border:"1px solid black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
<div style={{height:"40px",width:"230px"}}>PAYMENT THROUGH WALLET</div>
<div style={{height:"200px",width:"230px",border:"1px solid black"}}>

<div style={{height:"30px",width:"200px",display:"flex",border:"1px solid black"}}>AMOUNT:<input type="number"  /></div>
</div>
</div>
<div style={{height:"300px",width:"300px",border:"1px solid black",display:"flex",justifyContent:"center",alignItems:"center"}}>
<div style={{height:"200px",width:"200px",border:"1px solid black"}}>
  
</div>
</div>
</div> */}
        </div>
        </div>
        
        </>);
}
export default Home;



