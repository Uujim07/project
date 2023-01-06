const { model, Schema}= require("mongoose")

const commentScheme = new Schema ({
    original: String,
    registerDate:{type:Date, default: Date.now}
});
const commentModel= model ("Comment", commentScheme)
module.exports=commentModel