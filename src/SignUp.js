import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SignUp.css';
const SignUp = () =>{
    const navigate = useNavigate();
    const [email,setemail] = useState("");
    const [name,setname] = useState("");
    const [password,setpassword] = useState("");
    const [cpass,setcp] = useState("");
    const [error,seterror] = useState(" ");
    const submitform = (e) =>{
e.preventDefault();
axios.post("http://localhost:5617/delivery/signup",{name,email,password,cpass}).then(()=>{console.log("created user");navigate("/home"); setemail("");setname("");setpassword("");setcp("")}).catch((error)=>{console.log(error.message);seterror(error.response.data.error)});
axios.post("http://localhost:5617/delivery/createmoney",{email:email,money:0,contributions:0}).then(console.log("hello"))
  }
    return(<>
    {/* <div style={{height:"100vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>  
    <div style={{height:"200px",width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start"}}>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"red",borderRadius:"10px",fontSize:"70px",display:"flex",justifyContent:"center",fontWeight:"bold",position:"relative",zIndex:"30"}} id='m'>S</div>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"blue",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"70px",position:"relative",zIndex:"20"}}>I</div>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"yellow",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"70px",position:"relative",zIndex:"10"}} id="m1">G</div>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"green",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"70px",position:"relative",zIndex:"10",bottom:"30px",right:"10px"}} id="m2">N</div>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"aqua",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"70px",position:"relative",zIndex:"5",right:"30px"}} id="m3">U</div>
<div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"orange",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"70px",position:"relative",zIndex:"1",right:"55px"}} id="m4" >P</div>
        </div>
    <div id="log-in" style={{height:"350px",width:"450px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <form>
            <div >
            <div style={{display:"flex",height:"8vh",width:"full",justifyContent:"center",alignItems:"center",color:"white"}}>
                <div style={{width:"200px",fontSize:"20px"}}><label for="user-name">User-Name:</label></div>
              <div> <input type="text" onChange={(e)=>{setname(e.target.value)}} style={{border:"1px solid black",borderRadius:"5px",fontSize:"15px"}} required /></div>
            </div>
            <div style={{display:"flex",height:"8vh",width:"full",justifyContent:"center",alignItems:"center",color:"white"}}>
            <div style={{width:"200px",fontSize:"20px"}}><label for="email">E-mail:</label></div>
                <div><input type="text" onChange={(e)=>{setemail(e.target.value)}} style={{border:"1px solid black",borderRadius:"5px",fontSize:"15px"}} required /></div>
                
            </div>
            <div style={{display:"flex",height:"8vh",width:"full",justifyContent:"center",alignItems:"center",color:"white"}}>
            <div style={{width:"200px",fontSize:"20px"}}><label for="password">Password:</label></div>
             <div><input type="text" onChange={(e)=>{setpassword(e.target.value)}} style={{border:"1px solid black",borderRadius:"5px",fontSize:"15px"}} id="password" required /></div>   
            </div>
            <div style={{display:"flex",height:"8vh",width:"full",justifyContent:"center",alignItems:"center",color:"white"}}>
             <div style={{width:"200px",fontSize:"20px"}}> <label for="confirm-password">Confirm-Password:</label></div>  
             <div><input type="text" onChange={(e)=>{setcp(e.target.value)}} style={{border:"1px solid black",borderRadius:"5px",fontSize:"15px"}} id="confirm-password"required /></div>   
            </div>
            <div style={{height:"55px",width:"full",display:"flex",justifyContent:"center",alignItems:"center"}} >
                <button id="log-in" onClick={submitform} style={{height:"45px",width:"80px",fontSize:"17px",border:"2px soild black" ,borderRadius:"5px",backgroundColor:"black",color:"white"}}>Submit</button>
            </div>
            </div>
            
        </form>
    </div>
    </div> */}
    <div class="login-box">
  <label class="toggle" for="myToggle">
    <input class="toggle__input" name="" type="checkbox" id="myToggle"/>
    <div class="toggle__fill"></div>
</label>
  <h2>SignUp</h2>
  <form onSubmit={submitform}>
    <div class="user-box">
      <input type="text" name="UserName" onChange={(e)=>{setname(e.target.value)}} required/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="text" name="E-mail" onChange={(e)=>{setemail(e.target.value)}} required/>
      <label>E-mail</label>
    </div>
    <div class="user-box">
      <input type="text" name="Password" onChange={(e)=>{setpassword(e.target.value)}} required/>
      <label>Password</label>
    </div>
    <div class="user-box">
      <input type="text" name="Confirm-Password" onChange={(e)=>{setcp(e.target.value)}} required/>
      <label>Confirm-Password</label>
    </div>
    <input type="submit" name="SignUp" value="SignUp"/>
    {/* <a href=" You forgot your password?">
    Already had an account
  </a> */}
  </form>
</div>
<div style={{height:"50px",width:"full",display:"flex",justifyContent:"center"}}>
<div style={{height:"70px",width:"500px",display:"flex",justifyContent:"center",fontSize:"30px",color:"red",alignItems:"center"}}>{error}</div>
</div>
    </>);
}
export default  SignUp;