import React, { useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardDetails from '../ActivityCard/CardImage.json'
import Bored from "../Bored";

function ActivityPage(props) { //pulling in bored data as a prop from app which will be useable here. 
    const boredData = props.boredData
    const [details, setDetails] = useState(cardDetails)

for (let i=0; i < boredData.length; i++) {
   boredData[i].image = cardDetails[i].image 
}

    return (
        <div>
            {boredData.map(d => { 
                return (
                    <div className="activities">
                        <ActivityCard
                            type={d.type}
                            image={d.image}
                            activity={d.activity}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ActivityPage