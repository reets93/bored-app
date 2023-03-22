import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardDetails from '../ActivityCard/CardImage.json'
import './ActivityPage.css'
import ExploreModal from "../Explore/ExploreModal";

function ActivityPage(props) { //pulling in boredData as a prop from api which will be useable here. 
    const boredData = props.boredData

    // if statement to match the correct background image to the activity/type generated from the API
    for (let i = 0; i < boredData.length; i++) {
        if (boredData[i].type === "social") {
            boredData[i].image = cardDetails[0].image
            boredData.id = cardDetails[0].id
        } else if (boredData[i].type === "recreational") {
            boredData[i].image = cardDetails[1].image
            boredData.id = cardDetails[1].id
        } else if (boredData[i].type === "education") {
            boredData[i].image = cardDetails[2].image
            boredData.id = cardDetails[2].id
        } else if (boredData[i].type === "diy") {
            boredData[i].image = cardDetails[3].image
            boredData.id = cardDetails[3].id
        } else if (boredData[i].type === "charity") {
            boredData[i].image = cardDetails[4].image
            boredData.id = cardDetails[4].id
        } else if (boredData[i].type === "cooking") {
            boredData[i].image = cardDetails[5].image
            boredData.id = cardDetails[5].id
        } else if (boredData[i].type === "relaxation") {
            boredData[i].image = cardDetails[6].image
            boredData.id = cardDetails[6].id
        } else if (boredData[i].type === "music") {
            boredData[i].image = cardDetails[7].image
            boredData.id = cardDetails[7].id
        } else if (boredData[i].type === "busywork") {
            boredData[i].image = cardDetails[8].image
            boredData.id = cardDetails[8].id
        }
    }

    return (
        <section>
            <header className="header">
                <h3>Give these activities a go!</h3>
                <p id="headerP">Hover over the cards to see the activity</p>
            </header>

            {/* Mapping the activity card and information from the bored API. This also pulls in information from the above if statement */}
            <div className="cards row g-3" >
                {boredData.map((d, i) => {
                    return (
                        <div className="activities col-lg-4 col-md-6 col-sm-12 col-xs-12" key={d.id}>
                            <ActivityCard
                                icon={d.icon}
                                type={d.type}
                                image={d.image}
                                activity={d.activity}
                            />
                        </div>
                    )
                })}

                {/* Pass boredData to the modal */}
                <ExploreModal boredData={boredData} />
            </div>
        </section>
    )
}

export default ActivityPage