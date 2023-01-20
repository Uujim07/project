const { findByIdAndRemove } = require("../model/dapi");
const Comment = require("../model/dapi")

exports.getComment = async (req, res, next)=>{
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
exports.createComment = async (req, res, next) =>{
    const oldLInk = await Comment.findOne({original:req.body.original})
    if(oldLInk){
        return res
        .status(200).json({
            success: true,
            message: "huuchin hereglegch garsan",
            original:oldLInk.original,
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
        original: category.original
    })
}