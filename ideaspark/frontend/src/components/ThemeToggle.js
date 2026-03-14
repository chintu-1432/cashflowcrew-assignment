import React, { useState } from "react";

function ThemeToggle(){

  const [dark,setDark] = useState(false);

  const toggleTheme = ()=>{
    setDark(!dark);

    if(!dark){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
  };

  return(
    <button className="theme-btn" onClick={toggleTheme}>
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  )
}

export default ThemeToggle;