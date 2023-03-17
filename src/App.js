import React, { useState } from "react";
import Bored from "./components/Bored";
import Youtube from "./components/Youtube";
import './App.css';
import ActivityCard from "./components/ActivityCard/ActivityCard";
import FirstPage from "./components/FirstPage/FirstPage"

function App() {
  return (
    <div>
      <FirstPage/>
      <Bored />
      <ActivityCard />
      
    </div>
  )
}

export default App;



