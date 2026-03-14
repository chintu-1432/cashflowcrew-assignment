import React, { useState } from "react";
import axios from "axios";

function CreateIdea({ refreshIdeas }) {

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [author,setAuthor]=useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();

    await axios.post("http://localhost:5000/api/ideas",{
      title,
      description,
      author
    });

    setTitle("");
    setDescription("");
    setAuthor("");

    refreshIdeas();   // refresh list automatically
  };

  return(
  <div className="form-box">

    <h2>Create Idea</h2>

    <form onSubmit={handleSubmit}>

      <input
      placeholder="Title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
      placeholder="Description"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />

      <input
      placeholder="Author"
      value={author}
      onChange={(e)=>setAuthor(e.target.value)}
      />

      <button type="submit">Submit Idea</button>

    </form>

  </div>
)
}

export default CreateIdea;