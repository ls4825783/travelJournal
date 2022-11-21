import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data.js";


function App() {
  const detail = data.map(item => {
    return (
      <Main 
      data={item}
       />
    )
  });
  
  return (
    <> 
    <div className="app">
      <Navbar />
      {detail}
    </div>
   </>
  );
}

export default App;
