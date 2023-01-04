const express= require("express")
const router = express.Router();
const {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
}= require("./controllor")
router
    .post("/",createUser)
    .get("/",getUsers)
    .get("/:id",getUser)
    .delete("/:id",deleteUser)
    .put("/:id",updateUser)

module.exports = router;
