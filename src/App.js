import React, { useState } from "react";
import Bored from "./components/Bored";
import Youtube from "./components/Youtube";
import './App.css';
// import ActivityCard from "./components/ActivityCard/ActivityCard";
import ActivityPage from "./components/ActivityPage/ActivityPage";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import FirstPage from "./components/FirstPage/FirstPage"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <FirstPage/>
      <Bored />
      <ActivityPage />
      <Footer/>
    </div>
  )
}

export default App;



