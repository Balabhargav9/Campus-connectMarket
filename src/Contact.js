import { useEffect,useState,useRef } from "react";
import axios from "axios";
const Contact = () =>{
    const my="siddharthapasumarthy2@gmail.com"
    const inputRef = useRef(null);
    const display =() =>{
        const input = inputRef.current.value;
axios.post("http://localhost:5617/delivery/contactmail",{mail:my,matter:input}).then(()=>{console.log("succesfully send mail")}).catch((error)=>{console.log(error.message)});
    }
    return(<>
    <div style={{width:"100%",height:"100vh",backgroundColor:"#FBF5DF"}}>
        <input ref={inputRef} type="text" style={{width:"100%",height:"150px",marginTop:"40px"}} />
        <div>
        <button onClick={display} style={{width:"90px",height:"45px",fontSize:"13px",display:"flex",justifyContent:"center",backgroundColor:"orange",marginLeft:"650px",marginTop:"30px"}}>SEND EMAIL</button>
    </div>
    </div>
    </>);
}
export default Contact;