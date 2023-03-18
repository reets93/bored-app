import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardDetails from '../ActivityCard/CardImage.json'


function ActivityPage(props) { //pulling in boredData as a prop from app which will be useable here. 
    const boredData = props.boredData

for (let i=0; i < boredData.length; i++) {
   boredData[i].image = cardDetails[i].image 
   boredData[i].type = cardDetails[i].type
//    boredData[i].icon = cardDetails[i].icon
}

    return (
        <div>
            {boredData.map(d => { 
                return (
                    <div className="activities">
                        <ActivityCard
                            icon={d.icon}
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