const express= require("express")
const router = express.Router();
const {
    getUser,
    createUser,
    deleteUser,
    updateUser,
}= require("../controller/usercontroller");
const log = require("../middleware/log");
router
    .get("/",getUser)
    .post("/", createUser)
    .get("/:id" ,log ,getUser)
    .get("/:id",deleteUser)
    .get("/:id", updateUser)
    
module.exports = router;
