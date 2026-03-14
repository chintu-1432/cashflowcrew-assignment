import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar">

      <div className="logo">
        IdeaSpark
      </div>

      <div className="nav-links">

        <Link to="/home">Home</Link>

        <Link to="/leaderboard">Leaderboard</Link>

        <ThemeToggle/>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;