
const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.index = async (req,res) => {
    let data = await User.findAll(["id , name","email"]);
    res.status(200).json({status:true,message:"Success" ,data:data });
};

exports.show = async (req,res) => {
    let user = await User.findById(req.params.id);
    if(user != null){
        let notes = await user.notes();
        res.status(200).json({status:true,message:"Success" ,object:notes });
    }else{
        res.status(404).json({status:false, message:"Not Found " });
    }
    
};

exports.store = async (req,res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()){
            let user = new User(req.body.name,req.body.email,req.body.password);
    let saved = await user.save();
    if (saved.status){
        return res.status(201).json(
            {status:true,message:"user created successfully",
            object:user, 
        });
    }else{
        return res.status(400).json(
            {status:false,message:"Failed to create new user", });
    } 
    }else{
        return res.status(400).json(
            {status:false,message:errors.array()[0].msg});
    }
};

exports.update = async (req,res) => {
    let errors = validationRules(req);
    if(errors.isEmpty()){
            let user = await User.findById(req.params.id);
    if(user != null) {
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        let updated = await user.update();
        if(updated){
            return res.status(updated ? 200 : 400).json({
                status:updated,
                message: updated ? "Updated Successfully" :"Updated failed"
            });
        }else{
            res.status(404).json({status:false, message:"Not Found " });
        }
    }
    }else{
        return res.status(400).json(
            {status:false,message:errors.array()[0].msg});
    }

};

exports.destroy = async(req,res) => {
    let user = await User.findById(req.params.id);
    if(user != null){
        const deleted = await user.delete();
        if(deleted){
            return res.status(200).json({status:true,message:"Deleted Successfully" });
        }else{
            return res.status(400).json({status:false,message:"Failed to Delete user"});
        }
        
    }else{
        return res.status(404).json({status:false, message:"Not Found " });
    }
};