const connect = require('./helper/api')
const express=require("express")
const commentRoute = require('./router/commentRouter')
const router = require('./router/userRouter')
const cors = require ("cors")
const dotenv = require("dotenv")
dotenv.config();
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200
}
const app= express();
app.use(cors(corsOptions))
connect();
const port =process.env.PORT || 5000;
app.use(express.json())
app.use("/comment",commentRoute);
app.use("/user",router);
app.listen(port,()=>{
    console.log(`server port in  http://localhost:${port}`)
})