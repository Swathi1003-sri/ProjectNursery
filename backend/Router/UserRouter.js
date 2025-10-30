const express = require("express")

const UserRouter = express.Router()

const { addUser, getUser, removeUser, loginUser } = require("../Controller/UserController")


UserRouter.post("/add",addUser)
UserRouter.get("/userget",getUser)
UserRouter.delete("/remove/:id",removeUser)
UserRouter.post("/login",loginUser)



module.exports = UserRouter