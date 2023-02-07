const { validationResult } = require("express-validator");

//dummy user array
let users = [{id:1, name:"User #1"}]

//const methodName = RequestHandler
//const methodName = (req,res) => {DO REQUIRED ACTIONS}
const getUsers = (req,res)=>{
    res.status(200).json({status:true , message:"Success !" , data:users})
};

const storeUser = (req,res)=>{
    const errors = validationResult(req);
    console.log(errors.array());
    if(!errors.isEmpty){
        res.status(200).json({status:true , message:"Success !" , data:req.body})
    }
    else{
        res.status(400).json({status:false, message:errors.array[0]})
    }
};

const deletUser = (req,res)=>{
    res.status(200).json({status:true , message:"Success !"})
};

const updateUser =(req,res)=>{
    res.status(200).json({status:true , message:"Success !"})
};

exports.getUsers = getUsers;
exports.storeUser = storeUser;
exports.deletUser = deletUser;
exports.updateUser = updateUser;