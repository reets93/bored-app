import React, { useState, useEffect } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardDetails from  '../ActivityCard/CardImage.json'
import Bored from "../Bored";

function ActivityPage() {
const [details, setDetails] = useState(cardDetails)
const [result, setResult] = useState(Bored) // not sure if this is needed/ does anything?

    return(
<div>
{details.map(d => {
    return(
    <div className="activities"> 
    <ActivityCard
    type={d.type}
    image={d.image}
    activity={d.activity}/> 
    </div>)//where does the activity come through from? link it to the API output
  })}

</div>
    )
}

export default ActivityPage