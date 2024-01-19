// import { useEffect, useState } from "react"
// import axios from "axios"
// import pic from "./login.jpg";
// const Profile = () =>{
//     const bala = localStorage.getItem('mail');
//     const [naam,setnaam] = useState("");
//     useEffect(()=>{
//         axios.post("http://localhost:5617/delivery/findusername",{email:bala}).then((response)=>{console.log(response.data.response.name);setnaam(response.data.response.name)}).catch((error)=>{console.log(error.message)});
//     },[])
//     let profilepic = document.getElementById('profile-pic');
//     let inputfile = document.getElementById('input-file');
//     inputfile.onchange = function(){
//         profilepic.src = URL.createObjectURL(inputfile.files[0]);
//     }
// return(
//     <>
//     {bala}
// <div style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
// <div style={{height:"630px",width:"450px",border:"1px solid black"}}>
//     {/* profilepic */}
// <div style={{height:"150px",width:"150px",border:"1px solid black",borderRadius:"50%",marginLeft:"150px",marginTop:"20px"}}>
// <img src={pic} alt="profile-img" id="profile-pic" style={{height:"150px" ,width:"150px",borderRadius:"50%"}} />
// </div>
// <div style={{height:"30px",width:"100px",border:"1px solid black",marginLeft:"180px",marginTop:"20px",paddingLeft:"5px"}}><label for="input-file">UPDATE IMG</label></div>
// <input type="file" id="input-file" style={{display:"none"}} />
// {/* anotherpoints */}
// <div style={{fontSize:"40px",height:"70px",width:"410px",marginLeft:"20px",border:"1px solid black",marginTop:"20px",borderRadius:"5px"}}>
// {naam}
// </div>
// <div style={{height:"70px",width:"410px",marginLeft:"20px",border:"1px solid black",marginTop:"20px",borderRadius:"5px"}}>

// </div>
// <div style={{height:"70px",width:"410px",marginLeft:"20px",border:"1px solid black",marginTop:"20px",borderRadius:"5px"}}>

// </div>
// <div style={{height:"70px",width:"410px",marginLeft:"20px",border:"1px solid black",marginTop:"20px",borderRadius:"5px"}}>

// </div>
// </div>
//     </div>
//     </>
// )
// }
// export default Profile
import { useEffect, useState } from "react";
import axios from "axios";
import { GrGoogle } from "react-icons/gr";
import { FaImages } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";
import { BsBank2 } from "react-icons/bs";
import { FaGooglePay } from "react-icons/fa6";
import './Profile.css';
const Profile = () => {
  const bala = localStorage.getItem('mail');
  const [naam, setNaam] = useState("xxx");
  const [paise,setpaise] = useState(1);
const [contributions,setcontributions] = useState(0);
  useEffect(() => {
    axios.post("http://localhost:5617/delivery/findusername", { email: bala })
      .then((response) => {
        setNaam(response.data.response.name);
      })
      .catch((error) => {
        console.log(error.message);
      });
      axios.post("http://localhost:5617/delivery/getmoney",{email:bala})
      .then((response)=>{
        setpaise(response.data.response[0].money);
        setcontributions(response.data.response[0].contributions);
        })  
      .catch((error) => {
        console.log(error.message);
      });
  },[]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };
  const [profilePic, setProfilePic] = useState();
  return (
    <>
    <div style={{height:"1000px",width:"full",display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"center"}}>
    <div style={{height:"100px",width:"full",fontSize:"40px",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <div style={{height:"50px",width:"200px",borderLeft:"10px solid black",borderRight:"10px solid black"}}></div>
        <div style={{height:"50px",width:"260px",backgroundColor:"#FFF1E6",display:"flex",justifyContent:"center",borderRadius:"10px"}}>MYSELF</div></div>
        <div style={{height:"230px",width:"230px",backgroundColor:"black",position:"relative",top:"80px",zIndex:"30",borderRadius:"50%"}}>
        <img src={profilePic} alt="profile-img" id="profile-pic" style={{ height: "200px", width: "200px",borderRadius:"50%" }} />
        </div>
        <div style={{height:"600px",width:"80%",backgroundColor:"#FFF1E6",position:"relative",zIndex:"20",borderRadius:"18px",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
        <div id="ggrid" style={{height:"440px",width:"full",display:"grid",alignItems:"flex-end"}}>
<div id="name" style={{height:"30px",width:"300px",fontFamily:"cursive",fontSize:"30px"}}>NAME:{naam}</div>
<div id="name" style={{height:"30px",width:"300px",fontFamily:"cursive",fontSize:"30px"}}>EARNINGS:{paise}</div>
<div id="name" style={{height:"30px",width:"300px",fontFamily:"cursive",fontSize:"30px"}}>CONTRIBUTIONS:{contributions}</div>
<div id="name" style={{height:"30px",width:"300px",fontFamily:"cursive",fontSize:"30px"}}>WALLET:</div>
<div id="name" style={{height:"30px",width:"300px",fontFamily:"cursive",fontSize:"30px"}}>BANK:</div>
<div id="name" style={{height:"30px",width:"300px",fontFamily:"cursive",fontSize:"30px"}}>UPI-ID:</div>
<div id="name" style={{height:"30px",width:"300px",fontFamily:"cursive",fontSize:"30px"}}>CUSTOMER-BADGE:</div>
</div>
<div style={{height:"100px",width:"full",display:"flex",justifyContent:"center",alignItems:"flex-end"}}>
<div style={{fontSize:"30px",height:"30px",width:"100px",display:"flex",justifyContent:"center"}}><GrGoogle /></div>
<div style={{fontSize:"30px",height:"30px",width:"100px",display:"flex",justifyContent:"center"}}><FaImages /></div>
<div style={{fontSize:"40px",height:"40px",width:"100px",display:"flex",justifyContent:"center"}}><TbPasswordFingerprint /></div>
<div style={{fontSize:"30px",height:"35px",width:"100px",display:"flex",justifyContent:"center"}}><BsBank2 /></div>
<div style={{fontSize:"70px",height:"50px",width:"100px",display:"flex",justifyContent:"center"}}><FaGooglePay /></div>
</div>
        </div>
    </div>
   
    </>
  );
};

export default Profile;

{/* <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px",border:"1px solid black" }}>
        <div id="money" style={{height:'400px',width:"200px",border:"1px solid black",display:"flex",flexDirection:"column",justifyContent:"space-between", marginTop: "100px"}}>
        <div id="name-1" style={{height:"200px",width:"200px",border:" 2px solid red",display:"flex",flexDirection:"column",justifyContent:"end"}}><div  style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"red"}}></div></div>   
        <div id="name-1" style={{height:"200px",width:"200px",border:" 2px solid red",display:"flex",flexDirection:"column",justifyContent:"end"}}><div id="name" style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"black"}}></div></div>
        </div>
        <div style={{ height: "630px", width: "450px", border: "1px solid black",backgroundImage:`url("${want}")`,display:"flex",justifyContent:"center", marginTop: "100px" }}>
        <div style={{marginTop:"210px"}} >
        <img src={profilePic} alt="profile-img" id="profile-pic" style={{ height: "250px", width: "250px" }} />
        </div>
        </div>
        <div id="money" style={{height:'400px',width:"200px",border:"1px solid black",display:"flex",flexDirection:"column",justifyContent:"space-between", marginTop: "100px"}}>
        <div id="name" style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"blue"}}></div>
        <div id="name" style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:"aqua"}}></div>
        </div>
      </div>
      <div id="container" style={{height:"130px",width:"full",border:"1px solid black",display:"flex",justifyContent:"space-between"}}>
      <div id="contributions" style={{height:"100px",width:"240px",border:"1px solid black",display:"flex",justifyContent:"center"}}>
<div style={{height:"100px",width:"100px",border:"1px solid black"}}></div>
      </div>
      <div id="contributions" style={{height:"100px",width:"440px",border:"1px solid black",display:"flex",justifyContent:"center"}}>
      <div style={{height:"100px",width:"100px",border:"1px solid black"}}></div>
      </div>
      </div> */}
