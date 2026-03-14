const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

router.get("/", async (req, res) => {
  const ideas = await Idea.find();
  res.json(ideas);
});

router.post("/", async (req, res) => {
  const idea = new Idea(req.body);
  await idea.save();
  res.json(idea);
});

module.exports = router;