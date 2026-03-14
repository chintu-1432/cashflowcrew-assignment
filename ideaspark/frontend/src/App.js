import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>} />

<Route path="/signup" element={<Signup/>} />

<Route path="/home" element={
<>
<Navbar/>
<Hero/>
<Home/>
</>
} />

<Route path="/leaderboard" element={
<>
<Navbar/>
<Leaderboard/>
</>
} />

</Routes>

</BrowserRouter>

)

}

export default App;