const Blog = require("../models/Blog")
const slugify = require("slugify")

exports.create=async(req,res)=>{
  try {
      req.body.slug = slugify(req.body.subtitle)
      const newblog = await new Blog(req.body).save()
      res.json(newblog)
    } catch (error) {
      res.status(400).json({
          err:err.message
      }) 
  }
}

exports.getall = async(req,res)=>{
    let blogs = await Blog.find({})
    .limit(parseInt(req.params.count))
    .populate("products")
    .sort([["createdAt" , "desc"]])
  res.json(blogs)
}

exports.all = async(req,res)=>{
    
}

exports.update=async(req,res)=>{
  try {
    if(req.body.title){
      
    }
  } catch (error) {
    
  }
}