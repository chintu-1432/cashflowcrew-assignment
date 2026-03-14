import React,{useEffect,useState} from "react";
import axios from "axios";

function Leaderboard(){

const [ideas,setIdeas] = useState([]);

const fetchLeaderboard = async()=>{

const res = await axios.get(
"http://localhost:5000/api/leaderboard"
);

setIdeas(res.data);

}

useEffect(()=>{

fetchLeaderboard();

},[]);

return(

<div className="leaderboard">

<h2>Top Ideas</h2>

{ideas.map((idea,index)=>(

<div className="leader-card" key={idea._id}>

<h3>
{index+1}. {idea.title}
</h3>

<p>
👍 {idea.upvotes}
</p>

</div>

))}

</div>

)

}

export default Leaderboard;