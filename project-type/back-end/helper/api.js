const mongoose =require("mongoose/")
const uri = "mongodb+srv://data-admin:Miijuu1005@cluster0.3nvashe.mongodb.net/?retryWrites=true&w=majority"
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Database is successfully cnnected.");
    }catch (error) {
        console.log(error);
    }
}

module.exports = connect;
