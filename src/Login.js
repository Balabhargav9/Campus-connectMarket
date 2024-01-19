import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoPerson } from "react-icons/io5";
const Login = () =>{
    const navigate = useNavigate();
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [error,seterror] = useState(" ");
    const logincomplete = (e) =>{
e.preventDefault();
axios.post("http://localhost:5617/delivery/login",{email,password}).then(()=>{console.log("logged in user successfully");localStorage.setItem('mail',email);navigate("/home");}).catch((error)=>{console.log(error.response.data.error);seterror(error.response.data.error)})

}
    return(
   <>
   
    {/* <div style={{height:"100vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",backgroundColor:"black",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}> */}
        {/* <div style={{height:"200px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"",borderRadius:"10px",fontSize:"70px",display:"flex",justifyContent:"center",fontWeight:"bold",position:"relative",zIndex:"30"}} id='m'>L</div>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"70px",position:"relative",zIndex:"20"}}>O</div>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"70px",position:"relative",zIndex:"10"}} id="m1">G</div>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"70px",position:"relative",zIndex:"10",bottom:"30px",right:"10px"}} id="m2">I</div>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"70px",position:"relative",zIndex:"5",right:"30px"}} id="m3">N</div>

        </div> */}
    {/* <div id="log-in" style={{width:"50vh",height:"40vh",display:"flex",justifyContent:"center",alignItems:"center",}}>
<form>
    <div style={{display:"flex",height:"8vh",width:"full",justifyContent:"center"}}>
        <div style={{width:"80px",fontSize:"20px",color:"white"}}><label for="e-mail">E-mail:</label></div>
        <div><input style={{borderRadius:"20px"}} onChange={(e)=>{setemail(e.target.value)}} type="text" id="e-mail" placeholder='email' required/></div>
    </div>
    <div style={{display:"flex",height:"8vh",width:"full",justifyContent:"center"}}>
        <div style={{width:"90px",fontSize:"20px",color:"white"}}><label for="pass">Password:</label></div>
        <div><input onChange={(e)=>{setpassword(e.target.value)}} type="text" id="pass" required/></div>
    </div>
    <div style={{width:"full",height:"8vh",display:"flex",justifyContent:"center"}}>
        <button id="log-in" onClick={logincomplete} style={{height:"35px",fontSize:"18px",color:"white",backgroundColor:"black"}}>SUBMIT</button>
    </div>
    <div style={{width:"full",height:"10vh",color:"white"}}>If you dont have account<a href='/signup' >sign up</a> </div>
</form>
    </div>
    </div> */}
 
 <div class="login-box">
  <label class="toggle" for="myToggle">
    <input class="toggle__input" name="" type="checkbox" id="myToggle"/>
    <div class="toggle__fill"></div>
</label>
  <h2>Login</h2>
  <form onSubmit={logincomplete}>
    <div class="user-box">
      <input type="text" onChange={(e)=>{setemail(e.target.value)}} id="e-mail" name="Email" required/>
      <label for="e-mail">Email</label>
    </div>
    <div class="user-box">
      <input type="password" onChange={(e)=>{setpassword(e.target.value)}} name="Password" id="pass" required/>
      <label for="pass">Password</label>
    </div>
    <input type="submit" name="login" id="log-in" value="login"/>
    <a href=" You forgot your password?">
    Forgot your password?
  </a>
  </form>
</div>
<div style={{height:"50px",width:"full",display:"flex",justifyContent:"center"}}>
<div style={{height:"70px",width:"500px",display:"flex",justifyContent:"center",fontSize:"30px",color:"red",alignItems:"center"}}>{error}</div>
</div>
 
   
    </>
    );
}
export default Login;