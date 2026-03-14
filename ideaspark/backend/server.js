const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

/* -----------------------------
   MongoDB Connection
------------------------------ */

mongoose.connect("mongodb+srv://Chintu_1432:Chintu8096@ideaspark.m0vvs8j.mongodb.net/ideaspark")

.then(()=>console.log("MongoDB Atlas Connected"))

.catch(err=>console.log(err));


/* -----------------------------
   User Schema
------------------------------ */

const UserSchema = new mongoose.Schema({

name:String,
email:{type:String,unique:true},
password:String,
createdAt:{type:Date,default:Date.now}

});

const User = mongoose.model("User",UserSchema);


/* -----------------------------
   Idea Schema
------------------------------ */

const IdeaSchema = new mongoose.Schema({

title:String,
description:String,
author:String,
upvotes:{type:Number,default:0},
createdAt:{type:Date,default:Date.now}

});

const Idea = mongoose.model("Idea",IdeaSchema);


/* -----------------------------
   Root
------------------------------ */

app.get("/",(req,res)=>{

res.send("IdeaSpark API running");

});


/* -----------------------------
   Signup
------------------------------ */

app.post("/api/signup",async(req,res)=>{

try{

const user = new User(req.body);

await user.save();

res.json(user);

}catch(err){

res.status(500).json(err);

}

});


/* -----------------------------
   Login
------------------------------ */

app.post("/api/login",async(req,res)=>{

const user = await User.findOne({

email:req.body.email,
password:req.body.password

});

if(!user){

return res.status(404).json("Invalid credentials");

}

res.json(user);

});


/* -----------------------------
   Create Idea
------------------------------ */

app.post("/api/ideas",async(req,res)=>{

const idea = new Idea({

title:req.body.title,
description:req.body.description,
author:req.body.author

});

await idea.save();

res.json(idea);

});


/* -----------------------------
   Get All Ideas
------------------------------ */

app.get("/api/ideas",async(req,res)=>{

const ideas = await Idea.find().sort({createdAt:-1});

res.json(ideas);

});


/* -----------------------------
   Update Idea
------------------------------ */

app.put("/api/ideas/:id",async(req,res)=>{

const updatedIdea = await Idea.findByIdAndUpdate(

req.params.id,
{
title:req.body.title,
description:req.body.description
},
{new:true}

);

res.json(updatedIdea);

});


/* -----------------------------
   Delete Idea
------------------------------ */

app.delete("/api/ideas/:id",async(req,res)=>{

await Idea.findByIdAndDelete(req.params.id);

res.json({message:"Idea deleted"});

});


/* -----------------------------
   Upvote Idea
------------------------------ */

app.patch("/api/ideas/:id/upvote",async(req,res)=>{

const idea = await Idea.findById(req.params.id);

idea.upvotes += 1;

await idea.save();

res.json(idea);

});


/* -----------------------------
   Leaderboard
------------------------------ */

app.get("/api/leaderboard",async(req,res)=>{

const ideas = await Idea.find()
.sort({upvotes:-1})
.limit(5);

res.json(ideas);

});


/* -----------------------------
   Server
------------------------------ */

app.listen(5000,()=>{

console.log("Server running on port 5000");

});