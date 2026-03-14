import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Signup(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSignup = async(e)=>{

e.preventDefault();

await axios.post("http://localhost:5000/api/signup",{

name,
email,
password

});

navigate("/");

}

return(
<div className="auth-page">
<div className="auth-container">

<h2>Signup</h2>

<form onSubmit={handleSignup}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">
Signup
</button>

</form>

</div>
</div>
)

}

export default Signup;