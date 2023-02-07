const Note = require("../models/Notes");

exports.index = async (req,res) => {
    let data = await Note.findAll();
    res.status(200).json({status:true,message:"Success" ,data:data });
};

exports.show = async (req,res) => {
    let note = await Note.findById(req.params.id);
    if(note != null){
        let user = await note.user();
        res.status(200).json({status:true,message:"Success" ,object:user });
    }else{
        res.status(404).json({status:false, message:"Not Found " });
    }
};

exports.store = async (req,res) => {
    let note = new Note(req.body.title , req.body.info , req.body.user_id);
    let saved = await note.save();
    if (saved.status){
        return res.status(201).json(
            {status:true,message:"note created successfully",
            object:note, 
        });
    }else{
        return res.status(400).json(
            {status:false,message:"Failed to create note", });
        }
    }

exports.update = async (req,res) => {
    let note = await Note.findById(req.params.id);
    if(note != null) {
        note.title = req.body.title;
        note.info = req.body.info;
        note.userId = req.body.user_id;
        let updated = await note.update();
        if(updated){
            return res.status(updated ? 200 : 400).json({
                status:updated,
                message: updated ? "Updated Successfully" :"Updated failed"
            });
        }else{
            res.status(404).json({status:false, message:"Not Found " });
        }
}
}

exports.destroy = async (req,res) => {
    let note = await Note.findById(req.params.id);
    if(note != null){
        const deleted = await note.delete();
        if(deleted){
            return res.status(200).json({status:true,message:"Deleted Successfully" });
        }else{
            return res.status(400).json({status:false,message:"Failed to Delete user"});
        }
        
    }else{
        return res.status(404).json({status:false, message:"Not Found " });
    }
}