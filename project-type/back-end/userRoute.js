const express= require("express")
const router = express.Router();
const {
    getUser,
    createUser,
}= require("./controllor")
router
    .post("/",createUser)
    .get("/:id",getUser)
module.exports = router;
