const Idea = require("../models/Idea");

exports.getIdeas = async (req, res) => {
  const ideas = await Idea.find().sort({createdAt:-1});
  res.json(ideas);
};

exports.createIdea = async (req, res) => {
  const idea = new Idea(req.body);
  await idea.save();
  res.json(idea);
};

exports.upvoteIdea = async (req, res) => {
  const idea = await Idea.findById(req.params.id);
  idea.upvotes += 1;
  await idea.save();
  res.json(idea);
};

exports.deleteIdea = async (req, res) => {
  await Idea.findByIdAndDelete(req.params.id);
  res.json({message:"Idea deleted"});
};