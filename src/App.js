import React, { useState } from "react";
import Youtube from "./components/Youtube";
import './App.css';
import ActivityPage from "./components/ActivityPage/ActivityPage";
import FirstPage from "./components/FirstPage/FirstPage"
import Animation from "./components/Animation/Animation"
import Footer from "./components/Footer/Footer"
import Axios from "axios";

function App() {
  const [boredData, setBoredData] = useState({}); // state that handles the bored api data
  const [isStartButtonClicked, setIsStartButtonClicked] = useState(false) // to hide/display first page on button click

  const baseUrl = "http://www.boredapi.com/api/activity?type=";
  const queryArray = ["social", "recreational", "education", "diy", "charity", "cooking", "relaxation", "music", "busywork"]; // listing out the category names so that later we can call the api in a for loop with the different type as the query

  const getCurrentActivites = () => { //will be an onclick function --> two diff components (try this button; and try more)
    const activityArray = [];// will push api data objects to this array for each query search result

    queryArray.forEach(q => {
      Axios.get(baseUrl + q)
        .then((response) => {
          activityArray.push(response.data) // pushing result to activityArray
          if (activityArray.length === 9) {
            setBoredData(activityArray);
          if (isStartButtonClicked === false) { //false = not clicked yet
            setIsStartButtonClicked(true) // once clicked it will set to true and then be used in the logic in the return
          }
          }
          console.log("array ", activityArray);
        })
    })


  }

  return (
    <div>
      <Animation />
      {isStartButtonClicked ?
        <> <ActivityPage boredData={boredData} getCurrentActivites={getCurrentActivites} />
          <Footer getCurrentActivites={getCurrentActivites} /> </> :
        <FirstPage getCurrentActivites={getCurrentActivites} />}
    </div>
  )
}

export default App