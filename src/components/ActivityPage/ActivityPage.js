import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardDetails from '../ActivityCard/CardImage.json'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './ActivityPage.css'


function ActivityPage(props) { //pulling in boredData as a prop from app which will be useable here. 
    const boredData = props.boredData

for (let i=0; i < boredData.length; i++) {
   boredData[i].image = cardDetails[i].image 
   boredData[i].type = cardDetails[i].type
//    boredData[i].icon = cardDetails[i].icon
}

return (
    <div className="cards" >
  <Row xs={4} md={3} className="g-3">
        {boredData.map(d => { 
                return (
                    //key not working - still an error in console
                    <div className="activities"key={d.id}> 
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
        </div>
    )
}

export default ActivityPage