import React, { useState } from "react";
// import Bored from "./components/Bored";
import Youtube from "./components/Youtube";
import './App.css';
// import ActivityCard from "./components/ActivityCard/ActivityCard";
import ActivityPage from "./components/ActivityPage/ActivityPage";
import Axios from "axios";

function App() {
  const [boredData, setBoredData] = useState({}); // state that handles the bored api data
  const baseUrl = "http://www.boredapi.com/api/activity?type=";

  const queryArray = ["social", "recreational", "education", "diy", "charity", "cooking", "relaxation", "music", "busywork"]; // listing out the category names so that later we can call the api in a for loop with the different type as the query

  const getCurrentActivites = () => { //will be an onclick function --> two diff components (try this button; and try more)
    const activityArray = [];// will push api data objects to this array for each query search result

    queryArray.map(q => {
      // console.log("i'm looping")
      // console.log(typeof q)
      // console.log(q)
      Axios.get(baseUrl + q)
        .then((response) => {
          // console.log(response);
          activityArray.push(response.data) // pushing result to activityArray
          console.log(activityArray)
          // activityArray.length === 9 && setBoredData(activityArray)
          
          return activityArray
        });
    })
    console.log(typeof activityArray)
    // setBoredData(activityArray);  // failing here - doesn't want to work -- once return an object, want to set our state to that , semantics or use state issue?
    // console.log(boredData);
  }


  return (
    <div>
      {/* <Bored /> */}
      <button onClick={getCurrentActivites}>Try This - Testing</button>
      {/* {boredData.length > 0 && boredData[0].activity}
      {boredData.length > 0 && boredData[8].activity} */}
      <ActivityPage boredData={boredData} fetchNewData={getCurrentActivites} /> {/* passes down through to other page so i can access and use the data there as a prop */}
    </div>
  )
}

export default App;
