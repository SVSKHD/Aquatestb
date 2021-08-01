const express = require("express")
const server = express.Router()

const {authCheck , adminCheck} = require("../middlewares/auth")
const {create, getall , update} = require("../controllers/blog")








module.exports = server