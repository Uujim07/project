const connect = require('./helper/api')
const express=require("express")
const userRoute = require('./userRoute')
connect();
const port = 8000;
const app= express();
app.use(express.json())
app.use("/user",userRoute);
app.listen(port,()=>{
    console.log(`server port in  http://localhost:${port}`)
})