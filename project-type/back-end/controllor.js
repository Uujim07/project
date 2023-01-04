const Comment = require("./dapi")


exports.getUsers= async (req,res,next)=>{
    const comments= await Comment.find();
    res.status(200).json({
        data:comments,
    })
;
}

exports.getUser = async (req, res, next)=>{
    const category = await Comment.findById(req.params.id);
    if(!category){
        res
        .status(400).json({
            success:false,
            data: category
        })
    }
    res
    .status(200).json({
        success:true,
        data: category,
    })
}
exports.createUser = async (req, res, next) =>{
    console.log(req.body)
    const category = await Comment.create(req.body)
    
    if(!category){
        res
        .status(400).json({
            success:false,
            data: category
        })
    }
    res
    .status(200).json({
        success: true,
        message: "Shine hereglegch uussen",
        data: category
    })
}
exports.deleteUser= async ( req, res, next)=>{
    const category = await Comment.findOneAndDelete(req.params.id)
    if(!category){
        res
        .status(400).json({
            success:false,
            data: category
        })
    }
    res
    .status(200).json({
        success: true,
        message: "Delete bolson",
        data: category
    })
}
exports.updateUser = async (req,res,next)=>{
    const category = await Comment.findByIdAndUpdate(req.params.id, {...req.body})
    if(!category){
        res
        .status(400).json({
            success:false,
            data: category
        })
    }
    res
    .status(200).json({
        success: true,
        message: "update bolson",
        data: category
    })
}