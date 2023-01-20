const { model, Schema}= require("mongoose")

const userScheme = new Schema ({
    email: String,
    password: String,
    data: String,
    registerDate:{
        type:Date,
        default: Date.now()
    }
});
const UserModel= model ("User", userScheme)
module.exports=UserModel