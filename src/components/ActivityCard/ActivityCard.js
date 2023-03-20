import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivityCard.css';
import { FaBinoculars } from "react-icons/fa";

function ActivityCard(props) {
    return (
        <div className="activity-card">
       <div className="cardActivity">
        <img src={props.image} class="card-img" alt="" width="340px" height="240px"></img>
        <div className="card-main">
        <h4 className="card-title">{props.type}</h4>
        <p className="card-info">{props.activity}</p>
        <div className="d-flex justify-content-center">
        <button className='cardBtn'> Explore <FaBinoculars /></button>
        </div>
        </div>
        </div>
       </div>
    )
}

export default ActivityCard

