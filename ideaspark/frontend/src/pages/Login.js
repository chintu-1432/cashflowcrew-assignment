import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async(e)=>{

e.preventDefault();

const res = await axios.post("https://cashflowcrew-assignment-eoxn.onrender.com/api/login",{

email,
password

});

if(res.data){
navigate("/home");
}

}

return(

<div className="auth-page">

<div className="auth-container">

<h2>Login</h2>

<form onSubmit={handleLogin}>

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
Login
</button>

</form>

<p>
Don't have account? <a href="/signup">Signup</a>
</p>

</div>

</div>

)

}

export default Login;
