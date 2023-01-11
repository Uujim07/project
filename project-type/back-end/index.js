const connect = require('./helper/api')
const express=require("express")
const userRoute = require('./userRoute')
const cors = require ("cors")
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200
}
const app= express();
app.use(cors(corsOptions))
connect();
const port = 8000;

app.use(express.json())
app.use("/user",userRoute);
app.listen(port,()=>{
    console.log(`server port in  http://localhost:${port}`)
})