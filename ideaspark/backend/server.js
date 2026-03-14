const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

/* -----------------------------
   Middleware
------------------------------ */

app.use(cors());
app.use(express.json());

/* -----------------------------
   MongoDB Connection
------------------------------ */

mongoose.connect(
"mongodb+srv://Chintu_1432:Chintu8096@ideaspark.m0vvs8j.mongodb.net/ideaspark"
)

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

const {name,email,password} = req.body;

const existingUser = await User.findOne({email});

if(existingUser){
return res.status(400).json({message:"User already exists"});
}

const user = new User({
name,
email,
password
});

await user.save();

res.json(user);

}catch(err){

console.log(err);
res.status(500).json({message:"Signup failed"});

}

});


/* -----------------------------
   Login
------------------------------ */

app.post("/api/login",async(req,res)=>{

try{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.status(404).json({message:"User not found"});
}

if(user.password !== password){
return res.status(401).json({message:"Invalid password"});
}

res.json({
message:"Login successful",
user
});

}catch(err){

console.log(err);
res.status(500).json({message:"Login failed"});

}

});


/* -----------------------------
   Create Idea
------------------------------ */

app.post("/api/ideas",async(req,res)=>{

try{

const {title,description,author} = req.body;

const idea = new Idea({
title,
description,
author
});

await idea.save();

res.json(idea);

}catch(err){

console.log(err);
res.status(500).json({message:"Idea creation failed"});

}

});


/* -----------------------------
   Get All Ideas
------------------------------ */

app.get("/api/ideas",async(req,res)=>{

try{

const ideas = await Idea.find().sort({createdAt:-1});

res.json(ideas);

}catch(err){

console.log(err);
res.status(500).json({message:"Failed to fetch ideas"});

}

});


/* -----------------------------
   Update Idea
------------------------------ */

app.put("/api/ideas/:id",async(req,res)=>{

try{

const updatedIdea = await Idea.findByIdAndUpdate(

req.params.id,
{
title:req.body.title,
description:req.body.description
},
{new:true}

);

res.json(updatedIdea);

}catch(err){

console.log(err);
res.status(500).json({message:"Idea update failed"});

}

});


/* -----------------------------
   Delete Idea
------------------------------ */

app.delete("/api/ideas/:id",async(req,res)=>{

try{

await Idea.findByIdAndDelete(req.params.id);

res.json({message:"Idea deleted"});

}catch(err){

console.log(err);
res.status(500).json({message:"Delete failed"});

}

});


/* -----------------------------
   Upvote Idea
------------------------------ */

app.patch("/api/ideas/:id/upvote",async(req,res)=>{

try{

const idea = await Idea.findById(req.params.id);

idea.upvotes += 1;

await idea.save();

res.json(idea);

}catch(err){

console.log(err);
res.status(500).json({message:"Upvote failed"});

}

});


/* -----------------------------
   Leaderboard
------------------------------ */

app.get("/api/leaderboard",async(req,res)=>{

try{

const ideas = await Idea.find()
.sort({upvotes:-1})
.limit(5);

res.json(ideas);

}catch(err){

console.log(err);
res.status(500).json({message:"Leaderboard failed"});

}

});


/* -----------------------------
   Server
------------------------------ */

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{

console.log("Server running on port",PORT);

});
