const mongoose =require("mongoose/")
const dotenv = require("dotenv")
dotenv.config();
const uri = process.env.MONGO_URL;
mongoose.set('strictQuery', false);
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Database is successfully cnnected.");
    }catch (error) {
        console.log(error);
    }
}

module.exports = connect;
