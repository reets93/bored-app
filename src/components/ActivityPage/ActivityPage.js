import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardDetails from '../ActivityCard/CardImage.json'
import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
import './ActivityPage.css'
import ExploreModal from "../Explore/ExploreModal";

function ActivityPage(props) { //pulling in boredData as a prop from app which will be useable here. 
    const boredData = props.boredData


    for (let i = 0; i < boredData.length; i++) {  // can try to refactor this to a switch statement? I wasn't able to get it working as switch statement
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
        <div className="cards" >
            <Row xs={2} md={3} className="g-3">
                {boredData.map(d => {
                    return (
                        //key not working - still an error in console
                        <div className="activities" key={d.id}>
                            <ActivityCard
                                icon={d.icon}
                                type={d.type}
                                image={d.image}
                                activity={d.activity}
                            />
                        </div>
                    )
                })}
            </Row>
            
            {/* Below is attempt to pass boredData to the modal. Remove if not needed */}
            <ExploreModal boredData={boredData}/>
        </div>
    )
}

export default ActivityPage