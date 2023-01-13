const { findByIdAndRemove } = require("./dapi");
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
    res.redirect(category.original)
}
exports.createUser = async (req, res, next) =>{
    const oldLInk = await Comment.findOne({original:req.body.original})
    if(oldLInk){
        return res
        .status(200).json({
            success: true,
            message: "huuchin hereglegch garsan",
            name:oldLInk.original,
            data: oldLInk.id

        })
    }
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
        data: category.id,
        name: category.original
    })
}