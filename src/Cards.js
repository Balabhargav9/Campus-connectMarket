import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react";
import Template from './Template';
import { BsFillPinAngleFill } from "react-icons/bs";
const Cards = () =>{
    const [xxx,setx] = useState(0);
    const mail=localStorage.getItem('mail');
    const [info,setdata] = useState([]);
    useEffect(()=>{
        axios.post("http://localhost:5617/delivery/getdata").then((response)=>{setdata(response.data.user.response);}).catch((error)=>{console.log(error.message)})
    },[xxx])

    useEffect(()=>{
console.log("info",info);
    },[info])
    return(<>
       <div style={{height:"100px",width:"full",fontSize:"40px",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <div style={{height:"50px",width:"200px",borderLeft:"10px solid black",borderRight:"10px solid black"}}></div>
        <div style={{height:"50px",width:"260px",backgroundColor:"#FFF1E6",display:"flex",justifyContent:"center",borderRadius:"10px"}}>DASHBOARD</div></div>
   <div style={{height:"10px",width:"10px",backgroundColor:"black",borderRadius:"50%",position:"relative",top:"30px",left:"20px"}}></div>
   <div style={{height:"10px",width:"10px",backgroundColor:"black",borderRadius:"50%",position:"relative",top:"20px",left:"1240px"}}></div>
    <div style={{height:"88vh",width:"98%",backgroundColor:"#FFF1E6",margin:"auto",border:"1px solid black",borderRadius:"13px",overflowX:"scroll",overflowY:"scroll"}}>
   <div style={{height:"88vh",width:"98%",margin:"30px",overflowX:"scroll",overflowY:"scroll",display:"grid",gridTemplateColumns:"repeat(4,3fr)",gap:"20px 0px"}}> {
        info.map((data,index)=>(
            <div id={index} style={{backgroundColor:"#001c57",width:"40%",height:"330px",border:"2px solid black",borderRadius:"5px"}}>
            <div style={{height:"30px",width:"full",fontSize:"20px",color:"white",display:'flex',justifyContent:"center"}}><BsFillPinAngleFill /> </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:'white',justifyContent:"center"}}>
                <div style={{}}>name:</div>
                <div style={{overflow:"scroll"}}>{data.name}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:'white'}}>
                <div style={{}}>emailO:</div>
                <div style={{overflow:"scroll"}}>{data.email}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:'white'}}>
                <div style={{}}>item:</div>
                <div style={{overflow:"scroll"}}>{data.item}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:'white'}}>
                <div style={{}}>Price:</div>
                <div style={{overflow:"scroll"}}>{data.price}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:'white'}}>
                <div style={{}}>address:</div>
                <div style={{overflow:"scroll"}}>{data.address}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",justifyContent:"center"}}>
                <button id="log-in" onClick={()=>{ axios.post("http://localhost:5617/delivery/pendingdata",{id:data._id,name: data.name, email: data.email, item: data.item, price: data.price, address: data.address,otp:"" ,acceptedby:mail}).then(()=>{console.log("sent successfully");alert("the selected order has assigned to u")}).catch((error)=>{console.log(error.message)});axios.post("http://localhost:5617/delivery/deletedata",{id:data._id}).then(()=>{console.log("delete done");setx(xxx+1)}).catch((error)=>{console.log(error.message)});axios.post("http://localhost:5617/delivery/sendmail",{mail:data.email,acceptedby:mail}).then(()=>{console.log("order accepted")}).catch((error)=>{console.log(error.message)}); }} 
                style={{backgroundColor:"#001c57",color:"white"}}>ACCEPT</button>
            </div>
            </div>
        ))
    }
    </div>
    </div>
    </>);
}
export default Cards;
