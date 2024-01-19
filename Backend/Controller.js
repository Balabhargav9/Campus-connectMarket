const { UserModel, DataModel ,pendingModel,moneyModel } = require("./Schema");
const nodemailer = require('nodemailer');
require("dotenv").config();

exports.SignUp = async (req,res) =>{
    try{
const {name,email,password,confirmPassword} = req.body;
// if(password !== confirmPassword){
//      res.status(500).json({error:"please enter confirm password correctly"});
// }
    const response = await UserModel.create({name,email,password,confirmPassword});
    res.status(200).json({
        user:{response}
    })

    }
    catch(error){
console.log(error.message);
res.status(500).json({
    error:error.message
})
    }
}
exports.fetchSignup = async (req,res) =>{
    try{
const {email} = req.body;
const response = await UserModel.findOne({email});
res.status(200).json({
    response:response
})
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            error:error.message
        })
    }
}
exports.login = async (req,res) =>{
    try{
    const {email,password} = req.body;
    const response1 = await UserModel.findOne({email});
    if(!response1){
        console.log("invalid e-mail");
        return res.status(400).json({error:"invalid e-mail"});
        
    }
    if(password !== response1.password){
        console.log("invalid password");
        return res.status(400).json({error:"entered in-correct password"})
    }
    res.status(200).json({
        user:{response1}, 
    })
}
catch(error){
    console.log(error.message);
}
}

exports.createOrder = async (req,res) =>{
    try{
const {name,email,item,price,address,roll} = req.body;
const orderresponse = await DataModel.create({name,email,item,price,address,roll}) ;
res.status(200).json({user:{orderresponse}});
    }
    catch(error){
        console.log(error);
        res.status(200).json({error:error.messsage})
    }
}
exports.getAllData = async (req,res) =>{
    try{
const response = await DataModel.find();
res.status(200).json({user:{response}});
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}
exports.pendingdata = async (req,res) =>{
    try{
const {id,name,email,item,price,address,otp,acceptedby} = req.body;
const data = await pendingModel.create({id,name,email,item,price,address,otp,acceptedby});
res.status(200).json({
    pendingdata:{data}
})
    }
    catch(error){
        res.status(500).json({
            error:error.message
        })
    }
}
exports.getAllPendingData = async (req,res) =>{
    try{
        const {acceptedby} = req.body;
const response = await pendingModel.find({acceptedby});
res.status(200).json({user:{response}});
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}
exports.deletedata = async (req,res) =>{
    try{
const {id} = req.body;
const response = await DataModel.findByIdAndDelete(id);
res.status(200).json({ message: 'Data deleted successfully' });
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
 exports.SendEmail = async (req, res) => {
    try {
        const {mail,acceptedby}=req.body;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'penugondabalabharghav@gmail.com',
          pass: 'yssv kezg srfr qlby',
        },
      });
  
      const info = await transporter.sendMail({
        from: '"bhargavpenugonda05@gmail.com" <bhargavpenugonda05@gmail.com>', // Corrected the sender address
        to: mail,
        subject: 'Hello World',
        text: 'your order had been accepted',
        html: `<b>your order has been accepted by ${acceptedby}</b>`,
      });
  
      console.log('Message sent: %s', info.messageId);
      res.json(info);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
  exports.UpdateOtp = async ( req,res) =>{
    try{
const {id,otp} = req.body;
const io = await pendingModel.findOneAndUpdate({id:id,otp:otp});
res.status(200).json({
    op:io
})
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({error:error.messsage})
    }
  }
  exports.TaskComplete = async (req,res) =>{
    try{
const {id} = req.body;
const dop = await pendingModel.findOneAndDelete({id:id});
res.status(200).json({
    user:dop
})
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            error:error.message
        })
    }
  }
  exports.contactmail = async (req,res) =>{
    try{
const {mail,matter} = req.body;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'penugondabalabharghav@gmail.com',
      pass: 'yssv kezg srfr qlby',
    },
  });

  const info = await transporter.sendMail({
    from: '"bhargavpenugonda05@gmail.com" <bhargavpenugonda05@gmail.com>', // Corrected the sender address
    to: mail,
    subject: 'Hello World',
    text: 'your order had been accepted',
    html: `${matter}`,
  });

  console.log('Message sent: %s', info.messageId);
  res.json(info);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            error:error.message
        })
    }
  }
  exports.createmoney = async(req,res) =>{
    try{
const {email,money,contributions } = req.body;
const mm = await moneyModel.create({email,money,contributions});
res.status(200).json({
    res:mm
})

    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            error:error.message
        })
    }
  }
  exports.updatemoney = async(req,res) =>{
    try{
const {email,money,contributions}=req.body;
const mm = await moneyModel.findOneAndUpdate({email},{money},{contributions});
res.status(200).json({
    money:mm
})
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({
            error:error.message
        })
    }}
    
    exports.getmoney=async (req,res) =>{
        try{
const {email} = req.body;
const mm = await moneyModel.find({email});

res.status(200).json({response:mm});
        }
        catch(error){
            console.log(error.message);
            res.status(500).json({
                error:error.message
            })
        }
    }
  