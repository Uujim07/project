const { findByIdAndDelete } = require("../model/usermodel");
const UserModel = require("../model/usermodel")
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res, next) =>{
    const {email, password} = req.body
    let user
    try{
        user = await UserModel.create({...req.body})
        console.log("=>")
    }catch(e) {
        console.log(e)
           return  res
        .status(400).json({
            success:false,
            data: e.toString()
        })
    }
    console.log("ajillaa...");
    console.log("ajillaa1...");
    const token = jwt.sign({email, password}, "hello");
    res
    .status(200).json({
        success: true,
        message: "Shine hereglegch uussen",
        data: user,
        token
    })
}

exports.getUser = async (req, res, next)=>{
    const category = await UserModel.findById(req.params.id);
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
        message: "user irlee",
        data: category
    })
}
exports.deleteUser= async ( req, res, next)=>{
    const category = await UserModel.findOneAndDelete(req.params.id)
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
    const category = await UserModel.findByIdAndUpdate(req.params.id, {...req.body})
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
