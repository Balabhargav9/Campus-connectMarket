import { useEffect,useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const PendingData = () =>{
    const inputRef = useRef(null);
    const [info,setdata] = useState([]);
   const [money,setmoney] = useState(0);
const [cc,setcc] = useState(0);
    const navigate=useNavigate();
    const mail = localStorage.getItem('mail');
    useEffect(() => {
        axios.post("http://localhost:5617/delivery/getpendingdata", { acceptedby: mail })
          .then((response) => {
            setdata(response.data.user.response);
            console.log(response.data.user.response);
          
          })
          .catch((error) => {
            console.log(error.message);
          });
    
        // Add a cleanup function to reset info when the component unmounts
      }, [mail]); 
        
    return(<>
    <div style={{height:"100px",width:"full",fontSize:"40px",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <div style={{height:"50px",width:"200px",borderLeft:"10px solid black",borderRight:"10px solid black"}}></div>
        <div style={{height:"50px",width:"260px",backgroundColor:"#FFF1E6",display:"flex",justifyContent:"center",borderRadius:"10px"}}>WORK 2 DO</div></div>
    <div style={{height:"10px",width:"10px",backgroundColor:"black",borderRadius:"50%",position:"relative",top:"30px",left:"20px"}}></div>
    <div style={{height:"10px",width:"10px",backgroundColor:"black",borderRadius:"50%",position:"relative",top:"20px",left:"1240px"}}></div>
    <div style={{display:"flex",justifyContent:"center"}}>
<div style={{height:"88vh",width:"98%",borderRadius:"10px",backgroundColor:"#FFF1E6"}}>
 <div style={{height:"88vh",width:"98%",overflow:"scroll",margin:"30px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px",borderRadius:"10px"}}>    {
        info.map((data,index)=>(
            <div id={index} style={{backgroundColor:"#001c57",width:"52%",height:"440px",border:"2px solid black",borderRadius:"5px"}}>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:"white",justifyContent:"center",alignItems:"center"}}>
                <div>name:</div>
                <div style={{overflow:"scroll"}}>{data.name}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:"white"}}>
                <div >Email:</div>
                <div style={{overflow:"scroll"}} >{data.email}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:"white"}}>
                <div>item:</div>
                <div style={{overflow:"scroll"}}>{data.item}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:"white"}}>
                <div>Price:</div>
                <div style={{overflow:"scroll"}}>{data.price}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:"white"}}>
                <div>address:</div>
                <div style={{overflow:"scroll"}}>{data.address}</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px",color:"white"}}>
                <div>assigned to:</div>
                <div style={{overflow:"scroll"}}>bhargav</div>
            </div>
            <div style={{display:"flex",height:"50px",width:"full",fontSize:"18px"}}>
                <button onClick={()=>{const num = Math.floor(Math.random()*10000);axios.post("http://localhost:5617/delivery/sendmail",{mail:data.email,acceptedby:num}).then(()=>{axios.post("http://localhost:5617/delivery/updateotp",{id:data.id,otp:num}).then(()=>{console.log(data.otp)});alert("otp has send successfully")}).catch((error)=>{console.log(error.message);alert(error.message)})}} style={{backgroundColor:"#63c5da",marginLeft:"25px"}}>Generate OTP</button>
            </div>
            <div style={{height:"50px",width:"full",fontSize:"18px"}}>
                <div style={{display:"flex",marginTop:"20px"}}>
            <input type="text" ref={inputRef} style={{width:"70px",height:"50px",fontSize:"18px"}}/>  
            <button onClick={()=>{
                const inputValue = inputRef.current.value;
if(data.otp === inputValue)
{
    axios.post("http://localhost:5617/delivery/getmoney",{email:data.acceptedby,}).then((response)=>{setmoney(response.data.response.money);setcc(response.data.response.contributions)}).catch((error)=>{console.log(error.message)})
    axios.post("http://localhost:5617/delivery/updatemoney",{email:data.acceptedby,money:money+data.price,contributions:cc+1}).then(()=>{setmoney(0);console.log("money updated successfully")}).catch((error)=>{console.log(error.message)})
    axios.post("http://localhost:5617/delivery/taskcomp",{id:data.id}).then(()=>{console.log("successfully deleted");console.log(data);window.location.reload();alert("task had completed successfully")}).catch((error)=>{console.log(error.message);alert(error.message)})}    
    }} style={{backgroundColor:"#63c5da",marginLeft:"25px"}}
    
    >TASK COMPLETED</button>
            </div>
            </div>
            </div>
        ))
        
    }
    </div>
    </div>
    </div>
    </>);
}
export default PendingData;