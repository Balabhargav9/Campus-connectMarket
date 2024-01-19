const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
type:String
    },
    confirmPassword:{
        type:String
    }
})
const ds = new mongoose.Schema ({
    name:{
        type:String
    },
    email:{
        type:String
    },
    item:{
        type:String
    },
    price:{
        type:String
    },
    address:{
        type:String
    },
    roll:{
        type:String,
        unique:true
    }
})
const pending= new mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    item:{
        type:String
    },
    price:{
        type:String
    },
    address:{
        type:String
    },
    otp:{
        type:String
    },
    acceptedby:{
        type:String
    }
   
})
const money = new mongoose.Schema({
        email:{
            type:String
        },
        money:{
            type:Number
        },
        contributions:{
            type:Number
        }
})
const UserModel =  mongoose.model('schema',Schema);
const DataModel = mongoose.model('dsmodel',ds);
const pendingModel = mongoose.model('pmodel',pending);
const moneyModel = mongoose.model('mmodel',money);
module.exports = { UserModel, DataModel ,pendingModel,moneyModel}; 