import React, { useState, useEffect } from "react";
import axios from "axios";
//import IdeaCard from "../components/IdeaCard";
function Home() {

  const [ideas, setIdeas] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  /* FETCH IDEAS */

  const fetchIdeas = async () => {
    const res = await axios.get("https://cashflowcrew-assignment-eoxn.onrender.com/api/ideas");
    setIdeas(res.data);
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  /* CREATE IDEA */

  const handleCreate = async (e) => {

    e.preventDefault();

    await axios.post("http://localhost:5000/api/ideas", {
      title,
      description,
      author
    });

    setTitle("");
    setDescription("");
    setAuthor("");

    fetchIdeas();
  };

  /* UPVOTE */

  const upvoteIdea = async (id) => {

    await axios.patch(`http://localhost:5000/api/ideas/${id}/upvote`);

    fetchIdeas();
  };

  /* DELETE */

  const deleteIdea = async (id) => {

    await axios.delete(`http://localhost:5000/api/ideas/${id}`);

    fetchIdeas();
  };

  return (

    <div className="dashboard">

      {/* CREATE IDEA CARD */}

      <form className="create-form" onSubmit={handleCreate}>

        <h2>Create Idea</h2>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter idea title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Describe your idea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <button type="submit">Create Idea</button>

      </form>

      {/* IDEAS GRID */}

      <h2>Ideas</h2>

      <div className="ideas-grid">

        {ideas.map((idea) => (

          <div className="card" key={idea._id}>

            <h3>{idea.title}</h3>

            <p>{idea.description}</p>

            <p className="author">By {idea.author}</p>
<div className="card-footer">

<span>👍 {idea.upvotes}</span>

<div>

<button
type="button"
className="upvote-btn"
onClick={() => upvoteIdea(idea._id)}
>
Upvote
</button>

<button
type="button"
className="delete-btn"
onClick={() => deleteIdea(idea._id)}
>
Delete
</button>

</div>

</div>
            
          </div>

        ))}

      </div>

    </div>

  );
}

export default Home;
