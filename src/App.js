import React, { useState } from "react";
import Bored from "./components/Bored";
import Youtube from "./components/Youtube";
import './App.css';
import ActivityCard from "./components/ActivityCard/ActivityCard";

function App() {
  return (
    <div>
      <Bored />
      <ActivityCard />
    </div>
  )
}

export default App;



