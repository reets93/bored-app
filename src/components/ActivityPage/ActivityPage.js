import React, { useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardDetails from '../ActivityCard/CardImage.json'
import Bored from "../Bored";

function ActivityPage(boredData) { //pulling in bored data as a prop from app which will be useable here. 
    const [details, setDetails] = useState(cardDetails)

    return (
        <div>
            {details.map(d => { //linking to cardDetails ; need to figure out how to then link the borred API data 
                return (
                    <div className="activities">
                        <ActivityCard
                            type={d.type}
                            image={d.image}
                        // activity= {boredData.activity.map(enter logic here)} // find activity name based on card detail index
                        /* should work once the setData works*/
                        />
                    </div>
                )//where does the activity come through from? link it to the API output
            })}
        </div>
    )
}

export default ActivityPage