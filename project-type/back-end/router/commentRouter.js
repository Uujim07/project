const express= require("express")
const router = express.Router();
const {
    getComment,
    createComment,
}= require("../controller/controllor")
router
    .get("/",getComment)
    .post("/",createComment)
    
module.exports = router;
