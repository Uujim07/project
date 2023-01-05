const Comment = require("./dapi")

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