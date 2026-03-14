import React from "react";
import axios from "axios";

function IdeaCard({idea,refresh}){

const deleteIdea = async()=>{

await axios.delete(
`https://cashflowcrew-assignment-eoxn.onrender.com/api/ideas/${idea._id}`
);

refresh();

};

const upvoteIdea = async()=>{

await axios.patch(
`https://cashflowcrew-assignment-eoxn.onrender.com/api/ideas/${idea._id}/upvote`
);

refresh();

};

return(

<div className="card">

<h3>{idea.title}</h3>

<p>{idea.description}</p>

<p>Author: {idea.author}</p>

<p>👍 {idea.upvotes}</p>

<button onClick={upvoteIdea}>
Upvote
</button>

<button onClick={deleteIdea}>
Delete
</button>

</div>

)

}

export default IdeaCard;
