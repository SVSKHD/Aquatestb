const express = require("express")
const server = express.Router()

const {authCheck , adminCheck} = require("../middlewares/auth")
const {create, getall , update} = require("../controllers/blog")


server.get("/blog/:count", getall)
server.get("/blogs",)
server.get("/blog/:slug")


server.put("/blog" , authCheck , adminCheck , update)

server.post("/blog" ,authCheck , adminCheck , create)



module.exports = server